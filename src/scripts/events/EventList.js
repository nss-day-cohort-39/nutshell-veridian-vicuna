import { Event } from './Event.js'
import { useEvents } from './eventProvider.js'

const contentTarget = document.querySelector('.events')

contentTarget.innerHTML = `<h2 class="eventsTitle">Upcoming Events</h2>`

const render = (eventsToRender) => {
  return eventsToRender
    .map((eventObject) => {
      return Event(eventObject)
    })
    .join('')
}

export const EventList = () => {
  const events = useEvents()
  contentTarget.innerHTML += `
    <div class="eventList">${render(events)}</div>
  `
}
