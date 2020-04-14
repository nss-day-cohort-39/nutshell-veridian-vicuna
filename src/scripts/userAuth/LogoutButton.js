import { clearDashboard } from "../loadDashboard.js"

const eventHub = document.querySelector(".container")

export const ShowLogoutButton = () => {
    return `<div><button id="logoutButton">Logout</button></div>`
}

eventHub.addEventListener("click", event => {
    if (event.target.id === "logoutButton") {

        //remove the active user session
        sessionStorage.removeItem("activeUser")
        document.querySelector("#sessionResult").innerHTML = ''

        //clear the dashboard
        clearDashboard()

        //create an event for our app controller to hear
        const logoutButtonClickEvent = new CustomEvent("logoutButtonClicked")
        eventHub.dispatchEvent(logoutButtonClickEvent)
    }
})