/*
    Add New Friend Form
    HTML form that allows a user to add a new friend by typing in their name

    Authors: Heidi Sprouse
*/

import { useUsers } from "../users/userProvider.js"

const eventHub = document.querySelector(".container")

export const ShowAddFriendForm = () => {
        const currentUserId = document.querySelector("#currentUserId").value
        const users = useUsers()

        return `
    <div id="friendForm">
    <input id="newFriendName" list="friendDatalist">
        <datalist id="friendDatalist">
        ${users.map(user => {
            //map through all the users to create a datalist form element
            if (user.id !== parseInt(currentUserId)) {
                return `<option value="${user.username}">`
            }
        }).join('')}
    </datalist>
    <button id="AddFriendButton">Add Friend</button>
    </div>
    `
}

eventHub.addEventListener("click", event => {
    if (event.target.id === "AddFriendButton") {
        const addNewFriendEvent = new CustomEvent("AddNewFriend", {
            detail: {
                friendName: document.querySelector("#newFriendName").value
            }
        })

        eventHub.dispatchEvent(addNewFriendEvent)
    }
})