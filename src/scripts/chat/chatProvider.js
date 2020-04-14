// empty array to store the data for use
let messages = []

// function to export a copy of the data for another module
export const useChats = () => messages.slice()

// function to get the data from the api
export const getChats = () => fetch("http://localhost:8088/messages")
        .then( response => response.json() )
        .then( parsedMessages => messages = parsedMessages )

