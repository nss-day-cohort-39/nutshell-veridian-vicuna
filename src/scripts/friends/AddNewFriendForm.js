/*
    Add New Friend Form
    HTML form that allows a user to add a new friend by typing in their name

    Authors: Heidi Sprouse
*/

import { useUsers } from "../users/userProvider.js"

const currentUserId = document.querySelector("#currentUserId").value

export const ShowAddFriendForm = () => {
        const users = useUsers()

        return `
    <div id="friendForm">
        <datalist id="newFriendId">
        ${users.map(user => {
            //map through all the users to create a datalist form element
            if (user.id !== parseInt(currentUserId)) {
                return `<option value="${user.id}">${user.username}</option>`
            }
        })}
    </datalist>
    <button id="AddFriendButton">Add Friend</button>
    </div>
    `
}