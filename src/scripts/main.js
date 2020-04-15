import { pageStateChanged } from "./appController.js";
import { ShowLoginForm } from "./userAuth/LoginForm.js";
import { ShowRegisterForm } from "./userAuth/RegisterForm.js";
import { getUsers } from "./users/userProvider.js";
import { getEvents } from "./events/eventProvider.js";
import { getTasks } from "./tasks/TaskProvider.js";
import { loadDashboard } from './loadDashboard.js'
import { getNews } from './news/newsProvider.js'
import "./userAuth/loginUser.js"
import "./userAuth/registerUser.js"

//get the current user from session storage
const currentUserId = sessionStorage.getItem('activeUser')

//set the initial page state
pageStateChanged()

//array of all "get" fetch calls
const promises = [
    getUsers(),
    getEvents(),
    getTasks(),
    getNews()
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
