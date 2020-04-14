import { Event } from "./Event.js";
import { useEvents } from "./eventProvider.js";

const contentTarget = document.querySelector(".events")

contentTarget.innerHTML = `
<h2 class="eventsTitle">Upcoming Events</h2>
`

const render = eventsToRender => {
    contentTarget.innerHTML += eventsToRender.map(
        (eventObject) => {
            return Event(eventObject)
        }
    ).join("")
}


export const EventList = () => {
    // Use the journal entry data from the data provider component
    const events = useEvents()
    render(events)
}
