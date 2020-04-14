// Author: Jayson Rice - This component fetches the event data from the database.json

//Empty array that will contain the data from the events API
let events = []

//Function that returns a copy of the data that is fetched from the API
export const useEvents = () => {
    return events.slice()
}

//Gets the data

export const getEvents = () => {

    //fetches the data from the API 
    return fetch(`http://localhost:8088/events`)
        //returns a response in json 
        .then(response => response.json())
        //turn it into readable JavaScript
        .then(parsedevents => {
            events = parsedevents
        })
}