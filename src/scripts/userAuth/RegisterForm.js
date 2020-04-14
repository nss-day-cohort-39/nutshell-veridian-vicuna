/*
    Register Form
    Creates an HTML registeration form for the user

    Authors: Heidi Sprouse
*/

const contentTarget = document.querySelector("#register>section")

export const ShowRegisterForm = () => {
    contentTarget.innerHTML = `
    <h2>Register</h2>
        <p>
            <label for="register_username">Username</label><br />
            <input id="register__username" type="text" />
        </p>
        <p>
            <label for="register_password">Password</label><br />
            <input id="register__password" type="password" />
        </p>
        <p>
            <label for="register_passwordConfirm">Confirm Password</label><br />
            <input id="register__passwordConfirm" type="password" />
        </p>
        <p>
            <button id="registerButton">Register</button>
        </p>
    `
}