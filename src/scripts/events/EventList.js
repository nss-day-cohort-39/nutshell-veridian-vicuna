import { EventComponent } from "./Event.js";
import { useEvents } from "./eventProvider.js";

const entryLog = document.querySelector(".events")

export const EventList = () => {
    // Use the journal entry data from the data provider component
    const entries = useEvents()

    let journalHTMLRepresentation = ""
    for (const entry of entries) {
        journalHTMLRepresentation += EventComponent(entry)
    }
        entryLog.innerHTML = `
        ${journalHTMLRepresentation}
        `
}
