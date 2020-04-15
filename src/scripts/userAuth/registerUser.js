/*
    Register Form
    Creates an HTML registeration form for the user along with a click event to save the new user data and a back button

    Authors: Heidi Sprouse
*/

import { useUsers, registerUser } from "../users/userProvider.js"

const eventHub = document.querySelector(".container")

//function to test if an e-mail is in a valid format
const validEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

eventHub.addEventListener("registerButtonClicked", event => {
    const users = useUsers()

    const username = event.detail.username
    const email = event.detail.email
    const password = event.detail.password
    const password2 = event.detail.password2

    //variable that stores if there is an error, if it is false by the end then the user can be registered
    let errorTrigger = false

    //check to make sure that username field is filled out
    if (username === '') {
        alert('You did not input a username.')
        errorTrigger = true
    }

    //check to make sure that username hasn't been taken already
    const matchedName = users.some(user => user.username === username)
    if (matchedName === true) {
        alert('A user already exists with this username, please choose another.')
        errorTrigger = true

        //clear out the username since they need to pick another one
        document.querySelector("#register__username").value = ''
    }

    //check to make sure email field is filled out
    if (email === '') {
        alert('You did not input an e-mail address.')
        errorTrigger = true
    }

    //check to make sure email is in a valid format
    if (!validEmail(email)) {
        alert('Please input a valid e-mail address.')
        errorTrigger = true

        //clear out the e-mail address
        document.querySelector("#register__email").value = ''
    }


    //check to make sure that e-mail address isn't already in use
    const matchedEmail = users.some(user => user.email === email)
    if (matchedEmail === true) {
        alert('This e-mail address is already in use!')
        errorTrigger = true

        //clear out the e-mail address
        document.querySelector("#register__email").value = ''
    }

    //check to make sure password isn't blank
    if (password === '') {
        alert('Please input a password!')
        errorTrigger = true
    }

    //check to make sure that passwords match
    if (password !== password2) {
        //reset the password values on the form
        document.querySelector("#register__password").value = ''
        document.querySelector("#register__passwordConfirm").value = ''

        //let the user know that the passwords didn't match
        alert('Passwords do not match, try again!')
        errorTrigger = true
    }

    if (errorTrigger === false) {

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

        const userWasRegisteredEvent = new CustomEvent("userWasRegistered")
        eventHub.dispatchEvent(userWasRegisteredEvent)

        //clear out data in the form
        document.querySelector("#register__username").value = ''
        document.querySelector("#register__email").value = ''
        document.querySelector("#register__password").value = ''
        document.querySelector("#register__passwordConfirm").value = ''
    }

})