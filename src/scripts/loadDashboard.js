/*
    Dashboard Loader
    Controls loading the dashboard components when the user logs in,
    Needed a function that loads all the components that will need the user session

    Authors: Heidi Sprouse
*/

import { EventList } from './events/EventList.js'
import { NewsList } from './news/NewsList.js'
import { userArea } from './users/userArea.js'
import { ChatList } from './chat/ChatList.js'

const eventHub = document.querySelector(".container")

//add all functions to load theh components here
export const loadDashboard = () => {
    userArea()
    EventList()
    NewsList()
    ChatList()
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

//when a friend is added or deleted, reload all the components
eventHub.addEventListener("friendStateChanged", event => {
    clearDashboard()
    loadDashboard()
})