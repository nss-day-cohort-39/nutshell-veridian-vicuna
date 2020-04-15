// Author: Jayson Rice - This component converts object representations of objects to HTML representations

//HTML representation of a single event 
export const Event = eventObject => {
    return `
        <article class="singleEvent">
        <div class="headflexRow">
            <h3 class="eventName">${eventObject.name}</h3>
            
            <button id="deleteEvent--${eventObject.id}">Delete Event</button>
        </div>
            <section>${eventObject.date}</section>
            <section>${eventObject.location}</section>
        </article>
            `
        }