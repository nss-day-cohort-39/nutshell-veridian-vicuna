/*
    Login Form
    Creates an HTML login form for the user

    Authors: Heidi Sprouse
*/

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector("#login>section")

export const ShowLoginForm = () => {
    contentTarget.innerHTML = `
    <h2>Login</h2>
        <p>
            <label for="login_username">Username</label><br />
            <input id="login__username" type="text" value="" />
        </p>
        <p>
            <label for="login_password">Password</label><br />
            <input id="login__password" type="password" value="" />
        </p>
        <p>
            <button id="loginButton">Login</button>
        </p>
        <p>
            <button id="showRegisterFormButton">Register</button>
        </p>
    `
}

//login the user
contentTarget.addEventListener("click", event => {
    if (event.target.id === "loginButton") {
        const loginButtonClickEvent = new CustomEvent("loginButtonClicked", {
            detail: {
                username: document.querySelector("#login__username").value,
                password: document.querySelector("#login__password").value
            }
        })

        eventHub.dispatchEvent(loginButtonClickEvent)
    }
})

//take the user to the register form
contentTarget.addEventListener("click", event => {
    if (event.target.id === "showRegisterFormButton") {
        const showRegisterFormButtonEvent = new CustomEvent("showRegisterFormButtonClicked")

        eventHub.dispatchEvent(showRegisterFormButtonEvent)
    }
})