// Import the functions you need from the SDKs you need
import { deleteApp, getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCvaQEq3hMj8W0wuJm6tE9hKwV_IhVEU4o",
  authDomain: "sveltekit-fullstack-todo-e429a.firebaseapp.com",
  projectId: "sveltekit-fullstack-todo-e429a",
  storageBucket: "sveltekit-fullstack-todo-e429a.appspot.com",
  messagingSenderId: "858168873047",
  appId: "1:858168873047:web:2085aa1ca6b478c8491312"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
let firebaseApp;
if (!getApps().length) {
    firebaseApp = initializeApp(firebaseConfig);
} else {
    firebaseApp = getApp();
    deleteApp(firebaseApp);
    firebaseApp = initializeApp(firebaseConfig);
}

export const db = getFirestore(firebaseApp);
export const auth = getAuth(firebaseApp);