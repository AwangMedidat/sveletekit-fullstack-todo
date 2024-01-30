<div class="authContainer">
    <form>
        <h1>Sign In</h1>
        <label>
            <input type="email" placeholder="Email"/>
        </label>
        <label>
            <input type="password" placeholder="Password"/>
        </label>
        <label>
            <input type="password" placeholder="Confirm Password"/>
        </label>
        <button type="button">Submit</button>
    </form>
</div>

<style>
    .authContainer {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        flex: 1;
        padding: 24px;
    }

    form {
        display: flex;
        flex-direction: column;
        gap: 8px;
        width: 400px;
        max-width: 100%;
        margin: 0 auto;
    }

    h1 {
        text-align: center;
        font-size: 3rem;
    }

    form label {
        position: relative;
        border: 1px solid navy;
        border-radius: 5px;
    }

    form input {
        width: 100%;
        border: none;
        background: transparent;
        color: white;
        padding: 14px;
    }

    form input:focus {
        outline: none;
        border: none;
    }

    form button {
        background: navy;
        color: white;
        border: none;
        padding: 14px 0;
        border-radius: 5px;
        cursor: pointer;
        font-size: 1rem;
    }
    form button:hover {
        background: blue;
    }
</style>