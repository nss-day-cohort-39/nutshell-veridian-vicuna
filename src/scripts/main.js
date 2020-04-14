import { getEvents } from "./events/eventProvider.js";
import { EventList } from "./events/EventList.js";
import { getChats } from "./chat/chatProvider.js";
import { ChatList } from "./chat/ChatList.js";

getEvents()
    .then(EventList)

getChats()
    .then(ChatList)