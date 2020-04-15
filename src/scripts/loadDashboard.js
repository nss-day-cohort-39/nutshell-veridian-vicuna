/*
    Dashboard Loader
    Controls loading the dashboard components when the user logs in,
    Needed a function that loads all the components that will need the user session

    Authors: Heidi Sprouse
*/
import { ChatList } from './chat/ChatList.js'
import { userArea } from "./users/userArea.js"
import { EventList } from "./events/EventList.js"
import { TaskList } from "./tasks/TaskList.js"
import { NewsList } from './news/NewsList.js'

//add all functions to load theh components here
export const loadDashboard = (currentUserId) => {
    userArea(currentUserId),
    EventList(), 
    TaskList(currentUserId),
    ChatList(),
    NewsList(currentUserId)
}

//clears the dashboard to prevent conflicts
export const clearDashboard = () => {
  const clearTargets = [
    '.user', //
    '.news',
    '.events',
    '.tasks',
    '.chat',
  ]

  clearTargets.forEach(
    (component) => (document.querySelector(component).innerHTML = '')
  )
}
