import { getEvents } from "./events/eventProvider.js";
import { EventList } from "./events/EventList.js";

getEvents()
    .then(EventList)