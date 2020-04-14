/*
    User Data Provider
    -These functions pull data from the users resource in database.json

    Authors: Heidi Sprouse
*/

let users = []

export const getUsers = (userId = 0) => {
    return fetch("http://localhost:3000/users")
        .then(response => response.json())
        .then(response => users = response)
}

export const useUsers = () => users.slice()