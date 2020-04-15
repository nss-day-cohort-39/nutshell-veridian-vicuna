import { getEvents } from "./events/eventProvider.js";
import { EventList } from "./events/EventList.js";
import { getTasks } from "./tasks/TaskProvider.js";
import { TaskList } from "./tasks/TaskList.js"

getEvents()
    .then(EventList);

getTasks()
    .then(TaskList)