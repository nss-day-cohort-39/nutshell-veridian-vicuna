/*
    Application Controller
    -This page keeps track of the page state, listens to custom events, and updates the page state accordingly

    Authors: Heidi Sprouse
*/

/*
    List of possible page states

    - login:
        the login form
        target: #login
    - register
        the registration form
        target: #register
    - dashboard
        the main area of the site that the user has to be logged in to see
        target: #dashboard
*/

const eventHub = document.querySelector(".container")

//default page state
let pageState = "login"

//events that trigger a state change
eventHub.addEventListener("showRegisterFormButtonClicked", event => {
    pageState = "register"
    pageStateChanged()
})

eventHub.addEventListener("userWasLoggedIn", event => {
    pageState = "dashboard"
    pageStateChanged()
})

//resets the components
const hideAllComponents = () => {
    const componentArray = [
        '#login',
        '#register',
        '#dashboard'
    ]

    componentArray.forEach(component => document.querySelector(component).classList.add("hide"))
}

export const pageStateChanged = () => {
    //add the "hide" class to all components to reset the app state before running the logic
    hideAllComponents()

    if (pageState === "login") {
        document.querySelector("#login").classList.remove("hide")
    } else if (pageState === "register") {
        document.querySelector("#register").classList.remove("hide")
    } else if (pageState === "dashboard") {
        document.querySelector("#dashboard").classList.remove("hide")
    } else {
        //if page state isn't set default to home
        document.querySelector("#login").classList.remove("hide")
    }
}