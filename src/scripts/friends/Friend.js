/*
    Friend HTML
    Creates an HTML representation of a single friend

    Authors: Heidi Sprouse
*/

import { deleteFriend } from "./friendProvider.js"
import { useUsers } from "../users/userProvider.js"

const eventHub = document.querySelector(".container")

export const Friend = (friendObject) => {
    return `
    <h3>
        ${friendObject.username}
        <button id="deleteFriend--${friendObject.id}">Remove</button>
    </h3>`
}

eventHub.addEventListener("click", event => {
    if (event.target.id.startsWith("deleteFriend--")) {
        const currentUserId = document.querySelector("#currentUserId").value
        const users = useUsers()

        const currentUserInfo = users.find(user => user.id === parseInt(currentUserId))
        const friends = currentUserInfo.friends

        const [prefix, deleteFriendId] = event.target.id.split("--")

        //get the friend relationship id of the friend we want to delete
        const foundFriend = friends.find(friend => friend.id === parseInt(deleteFriendId))

        deleteFriend(foundFriend.id)
    }
})