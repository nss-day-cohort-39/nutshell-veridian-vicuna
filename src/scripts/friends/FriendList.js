/*
    Friend List
    Creates a list of friends given the current user object

    Authors: Heidi Sprouse
*/

import { useUsers } from "../users/userProvider.js";
import { Friend } from "./Friend.js";

export const ShowFriendList = (currentUserObject) => {
    const users = useUsers()

    //list of current user's friends
    const friends = currentUserObject.friends

    return friends.map(friend => {
        //get the friend's user info
        const friendInfo = users.find(user => friend.initiatorId === user.id)
        return Friend(friendInfo)
    }).join('')

}