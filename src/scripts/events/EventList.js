// Author: Jayson Rice - This component displays the list of events and also holds the button to open the event form

import { Event } from "./Event.js";
import { useEvents } from "./eventProvider.js";
import { EventForm } from "./EventForm.js";

const contentTarget = document.querySelector(".events")
const eventHub = document.querySelector(".container")

// Adds a static title and a button to the top of the event list
contentTarget.innerHTML = `
<h2 class="eventsTitle">Upcoming Events</h2>
<button id='showEventForm'>Toggle Event Form</button>
`

const render = eventsToRender => {
    return eventsToRender.map(
        (eventObject) => {
            return Event(eventObject)
        }
    ).join("")
}

export const EventList = () => {
    const events = useEvents()
    contentTarget.innerHTML += `<div class="eventList"> ${render(events)}</div>`
}

// If the event data is changed, re-render the new data and the surrounding divs
eventHub.addEventListener("eventStateChanged", CustomEvent => {
    contentTarget.innerHTML = `<h2 class="eventsTitle">Upcoming Events</h2>
    <button id='showEventForm'>Add an Event</button>`
    let events = useEvents()
    contentTarget.innerHTML += `<div class="eventList"> ${render(events)}</div>`
    EventForm()
})

// Tells other components when the event form button is clicked
contentTarget.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "showEventForm") {
        const customEvent = new CustomEvent("eventFormButtonClicked")
        eventHub.dispatchEvent(customEvent)
    }
})