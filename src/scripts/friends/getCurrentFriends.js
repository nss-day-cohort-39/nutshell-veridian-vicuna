/*
    Friend Getter
    Function that takes the current user's ID and spits out an array of friend objects

    Authors: Heidi Sprouse
*/

import { useUsers } from "../users/userProvider.js"

export const getFriendObjects = () => {
    const currentUserId = document.querySelector("#currentUserId").value
    const users = useUsers()

    const currentUserInfo = users.find(user => user.id === parseInt(currentUserId))

    const friends = currentUserInfo.friends

    //convert friend relationships into user objects
    const friendObjects = friends.map(friend => {
        return users.find(user => user.id === friend.following)
    })

    return friendObjects

}