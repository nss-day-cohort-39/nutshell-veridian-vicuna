import { getEvents } from "./events/eventProvider";
import { EventList } from "./events/EventList";

getEvents.then(EventList)