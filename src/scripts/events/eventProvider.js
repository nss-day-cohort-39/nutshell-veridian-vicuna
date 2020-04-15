// Author: Jayson Rice - This component fetches the event data from the database.json

let events = []

//Function that returns a copy of the data that is fetched from the API
export const useEvents = () => {
    return events.slice()
}

// Defining event hub to listen for changes in the JSON data
const eventHub = document.querySelector(".container")

const dispatchStateChangeEvent = () => {
    const eventStateChangedEvent = new CustomEvent("eventStateChanged")

    eventHub.dispatchEvent(eventStateChangedEvent)
}

// Fetches the JSON data
export const getEvents = () => {
    return fetch(`http://localhost:8088/events`)
        .then(response => response.json())
        .then(parsedevents => {
            events = parsedevents
        })
}

export const deleteEvent = eventId => {
    return fetch(`http://localhost:8088/events/${eventId}`, {
        method: "DELETE"
    })
        .then(getEvents)
        .then(dispatchStateChangeEvent)
}


// Responsible for the user saving new events
export const saveEvent = event => {
    return fetch('http://localhost:8088/events', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(event)
    })
    .then(getEvents)
    .then(dispatchStateChangeEvent)
}