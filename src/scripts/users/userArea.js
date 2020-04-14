/*
    User Area
    Fills in the leftmost column on the dashboard with the user's information and friend data

    Authors: Heidi Sprouse
*/

import { useUsers } from "./userProvider.js"

const contentTarget = document.querySelector(".user")

export const userArea = () => {
    const users = useUsers()

    //get the user's ID from the session
    const userId = document.getElementById("sessionResult").innerHTML
    console.log(userId)

    contentTarget.innerHTML = `Logged in as user ID ${userId}`
}