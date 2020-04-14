/*
    Login User Functions
    -These functions check to see if a user's info is valid, and if so logs them in

    Authors: Heidi Sprouse
*/

import { useUsers } from "../users/userProvider.js"

const eventHub = document.querySelector(".container")

//check to see if a user's name and password match
const CheckUserPassValid = (username, password) => {
    const users = useUsers()

    const foundUser = users.find(user => user.username === username)

    //no users with this username
    if (foundUser === undefined) {
        console.log('No user with this username found')
        return false
    }

    //check to see if password is valid
    if (foundUser.password !== password) {
        console.log('Password is incorrect')
        return false
    }

    return foundUser.id
}

//Set the session and login the user
eventHub.addEventListener("loginButtonClicked", event => {

    const username = event.detail.username
    const password = event.detail.password

    const userId = CheckUserPassValid(username, password)

    if (userId !== false) {

        const userLoggedInEvent = new CustomEvent("userWasLoggedIn")
        eventHub.dispatchEvent(userLoggedInEvent)

        sessionStorage.setItem("activeUser", userId)
        console.log(`logged in as user ID ${userId}`)
    } else {
        alert('Login cannot be completed')
    }
})