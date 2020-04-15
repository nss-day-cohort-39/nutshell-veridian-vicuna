/*
    User Area
    Fills in the leftmost column on the dashboard with the user's information and friend data

    Authors: Heidi Sprouse
*/

import { useUsers } from "./userProvider.js"
import { ShowLogoutButton } from "../userAuth/LogoutButton.js"
import { ShowFriendList } from "../friends/FriendList.js"

const contentTarget = document.querySelector(".user")

export const userArea = (currentUserId) => {
    const users = useUsers()

    //get current user's info
    const currentUserInfo = users.find(user => user.id === parseInt(currentUserId))

    contentTarget.innerHTML = `
    <div>
    Welcome, ${currentUserInfo.username}!
    ${ShowLogoutButton()}
    </div>
    `

    contentTarget.innerHTML += `
    <div id="friendsContainer">
    <div id="friendList">
    <h2>My Friends</h2>
    ${ShowFriendList(currentUserInfo)}
    </div>
    </div>`
}