//HTML representation of a single event 
export const eventComponent = eventObject => {
    return `
        <article class="singleEvent">
            <h3 class="eventName">${eventObject.name}</h3>
            <section>${eventObject.date}</section>
            <section>${eventObject.location}</section>
            `
        }