/* Author: Jayson Rice - This component displays the list of events and also 
holds the button to open the event form. It also handles event listeners for the events
*/
import { Event } from "./Event.js";
import { useEvents, deleteEvent } from "./eventProvider.js";
import { EventForm } from "./EventForm.js";

const contentTarget = document.querySelector(".events")
const eventHub = document.querySelector(".container")

// Adds a static title and a button to the top of the event list
contentTarget.innerHTML = `
<div class="headflexRow">
<h2 class="eventsTitle">Upcoming Events</h2>
<button id='showEventForm' class="plusBtn">+</button>
</div>
`

const render = (eventsToRender) => {
  return eventsToRender
    .map((eventObject) => {
      return Event(eventObject)
    })
    .join('')
}

export const EventList = (currentUserId) => {
    const events = useEvents()
    contentTarget.innerHTML += `<div class="eventList"> ${render(events)}</div>`
}

// If the event data is changed, re-render the new data and the surrounding divs
eventHub.addEventListener("eventStateChanged", CustomEvent => {
    contentTarget.innerHTML = `
    <div class="headflexRow">
    <h2 class="eventsTitle">Upcoming Events</h2>
    <button class="plusBtn" id='showEventForm'>+</button>
    </div>
    `
    
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

// Listens for the delete event button click
contentTarget.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("deleteEvent--")) {
        const [_, eventId] = clickEvent.target.id.split("--")
        deleteEvent(eventId)
    }
})