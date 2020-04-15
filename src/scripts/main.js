import { pageStateChanged } from "./appController.js";
import { ShowLoginForm } from "./userAuth/LoginForm.js";
import { ShowRegisterForm } from "./userAuth/RegisterForm.js";
import { getUsers } from "./users/userProvider.js";
import "./userAuth/loginUser.js"
import "./userAuth/registerUser.js"
import { loadDashboard } from "./loadDashboard.js";
import { getEvents } from "./events/eventProvider.js";
import { EventList } from "./events/EventList.js";
import { EventForm } from "./events/EventForm.js";

//get the current user from session storage
const currentUserId = sessionStorage.getItem("activeUser")

//set the initial page state
pageStateChanged()

//array of all "get" fetch calls
const promises = [
    getUsers(),
    getEvents()
]

Promise.all(promises)
    .then(() => {
        ShowLoginForm()
        ShowRegisterForm()
            //if the user is already logged in, go ahead and load the dashboard components
        if (currentUserId !== null) {
            loadDashboard(currentUserId)
        }
    })
