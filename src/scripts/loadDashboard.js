/*
    Dashboard Loader
    -Controls loading the dashboard components when the user logs in

    Authors: Heidi Sprouse
*/

import { userArea } from "./users/userArea.js"

export const loadDashboard = (currentUserId) => {
    userArea(currentUserId)
}

export const clearDashboard = () => {
    const clearTargets = [
        '.user',
        '.news',
        '.events',
        '.tasks',
        '.chat'
    ]

    clearTargets.forEach(component => document.querySelector(component).innerHTML = '')
}