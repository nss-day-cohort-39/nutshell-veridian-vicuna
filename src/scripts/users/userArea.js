/*
    User Area
    Fills in the leftmost column on the dashboard with the user's information and friend data

    Authors: Heidi Sprouse
*/

import { useUsers } from "./userProvider.js"
import { ShowLogoutButton } from "../userAuth/LogoutButton.js"

const contentTarget = document.querySelector(".user")
const currentUserId = document.querySelector("#sessionResult").innerHTML

export const userArea = (currentUserId) => {
    const users = useUsers()

    //get current user's info
    const currentUserInfo = users.find(user => user.id === parseInt(currentUserId))

    contentTarget.innerHTML = `Welcome, ${currentUserInfo.username}!`
    contentTarget.innerHTML += ShowLogoutButton()
}