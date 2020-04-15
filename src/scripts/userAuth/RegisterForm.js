/*
    Register Form
    Creates an HTML registeration form for the user along with a click event to save the new user data and a back button

    Authors: Heidi Sprouse
*/

import { registerUser } from "../users/userProvider.js"

const contentTarget = document.querySelector("#register>section")
const eventHub = document.querySelector(".container")

export const ShowRegisterForm = () => {
    contentTarget.innerHTML = `
    <h2>Register</h2>
        <p>
            <label for="register_username">Username</label><br />
            <input id="register__username" type="text" />
        </p>
        <p>
            <label for="register_email">E-mail Address</label><br />
            <input id="register__email" type="text" />
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
        <p>
            <button id="registerBackButton">Back</button>
        </p>
    `
}

//broadcast the registration data to registerUser.js 
contentTarget.addEventListener("click", event => {
    if (event.target.id === "registerButton") {

        const username = document.querySelector("#register__username").value
        const email = document.querySelector("#register__email").value
        const password = document.querySelector("#register__password").value
        const password2 = document.querySelector("#register__passwordConfirm").value

        //check to make sure that passwords match
        if (password !== password2) {
            //reset the password values on the form
            document.querySelector("#register__password").value = ''
            document.querySelector("#register__passwordConfirm").value = ''

            //let the user know that the passwords didn't match
            alert('Passwords do not match, try again!')
        } else {
            //data is good, go ahead and register the user

            //object to send to the save function
            const newUser = {
                username: username,
                email: email,
                password: password
            }

            //save the new user data
            registerUser(newUser)

            //alert the user that they registered
            alert(`Sucessfully registered as ${username}! Please login.`)

            const registerButtonClickEvent = new CustomEvent("registerButtonClicked")
            eventHub.dispatchEvent(registerButtonClickEvent)

            //clear out data in the form
            document.querySelector("#register__username").value = ''
            document.querySelector("#register__email").value = ''
            document.querySelector("#register__password").value = ''
            document.querySelector("#register__passwordConfirm").value = ''

        }
    }
})

//create an event to tell the app controller to set the page state back to "login"
contentTarget.addEventListener("click", event => {
    if (event.target.id === "registerBackButton") {
        const registerButtonClickEvent = new CustomEvent("registerBackButtonClicked")

        eventHub.dispatchEvent(registerButtonClickEvent)
    }
})