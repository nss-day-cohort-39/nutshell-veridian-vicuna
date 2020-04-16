/*  Author: Jayson Rice - This component displays the list of events and also 
    holds the button to open the event form. It also handles event listeners for the events
*/
import { Event } from "./Event.js";
import { useEvents, deleteEvent } from "./eventProvider.js";
import { EventForm } from "./EventForm.js";
import { useUsers } from "../users/userProvider.js";


// const allTheEvents = useEvents()
// const currentUserId = sessionStorage.getItem('activeUser')
// const filteredUserEvents = allTheEvents.filter(userEvent => userEvent.userId === parseInt(currentUserId));


const contentTarget = document.querySelector(".events")
const eventHub = document.querySelector(".container")

const render = (eventsToRender) => {

  return eventsToRender
    .map((eventObject) => {
        
        const userArray= useUsers()
        const chosenUser = userArray.find(
            user => user.id === eventObject.userId)

      return Event(eventObject, chosenUser)
    })
    .join('')
}

// Responsible for rendering the event list
export const EventList = () => {
    contentTarget.innerHTML = `
    <div class="headflexRow">
    <h2 class="eventsTitle">Upcoming Events</h2>
    <button type="button" id='showEventForm' class="plusBtn">+</button>
    </div>
`

    const allTheEvents = useEvents()
    const currentUserId = sessionStorage.getItem('activeUser')
    const filteredUserEvents = allTheEvents.filter(userEvent => userEvent.userId === parseInt(currentUserId));

    EventForm()
    contentTarget.innerHTML += `<div class="eventList"> ${render(filteredUserEvents)}</div>`
}

// If the event data is changed, re-render the new data and the surrounding divs
eventHub.addEventListener("eventStateChanged", CustomEvent => {
    contentTarget.innerHTML = `
    <div class="headflexRow">
    <h2 class="eventsTitle">Upcoming Events</h2>
    <button type="button" id='showEventForm' class="plusBtn">+</button>
    </div>
    `
    
    const allTheEvents = useEvents()
    const currentUserId = sessionStorage.getItem('activeUser')
    const filteredUserEvents = allTheEvents.filter(userEvent => userEvent.userId === parseInt(currentUserId));

    EventForm()
    contentTarget.innerHTML += `<div class="eventList"> ${render(filteredUserEvents)}</div>`

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