<script>
    import { onMount } from "svelte";
    import { auth, db } from "../lib/firebase/firebase";
    import { doc, getDoc, setDoc } from "firebase/firestore";
    import { authStore } from "../store/store"

    const nonAuthRoutes = ["/", "product"];

    onMount(() => {
        const unsubscribe = auth.onAuthStateChanged(async (user) => {
            const currentPath = window.location.pathname;

            if (!user && !nonAuthRoutes.includes(currentPath)) {
                window.location.href = "/";
                return;
            }

            if (user && currentPath === "/") {
                window.location.href = "/dashboard";
                return;
            }

            if (!user) {
                return
            }

            let dataToSetToStore;
            const docRef = doc(db, "users", user.uid);
            const docSnap = await getDoc(docRef); //error

            if (!docSnap.exists()) {
                const userRef = doc(db, "users", user.uid);
                dataToSetToStore = {
                    email: user.email,
                    todos: [],
                };
                await setDoc(userRef, dataToSetToStore, { merge: true });
            } else {
                const userData = docSnap.data();
                dataToSetToStore = userData
            }

            authStore.update((current) => {
                return {
                    ...current,
                    user,
                    data: dataToSetToStore,
                    loading: false
                }
            })

        });
    });
</script>

<div class="mainContainer">
    <slot />
</div>

<style>
    .mainContainer {
        min-height: 100vh;
        background: linear-gradient(to right, #000428, #000846);
        color: white;
        position: relative;
        display: flex;
        flex-direction: column;
    }
</style>
