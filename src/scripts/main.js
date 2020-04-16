import { pageStateChanged } from './appController.js'
import { getEvents } from './events/eventProvider.js'
import { loadDashboard } from './loadDashboard.js'
import { getNews } from './news/newsProvider.js'
import { ShowLoginForm } from './userAuth/LoginForm.js'
import './userAuth/loginUser.js'
import { ShowRegisterForm } from './userAuth/RegisterForm.js'
import './userAuth/registerUser.js'
import { getUsers } from './users/userProvider.js'
import { getChats } from './chat/chatProvider.js'
import './friends/addNewFriend.js'

//get the current user from session storage
const currentUserId = sessionStorage.getItem('activeUser')

//set the initial page state
pageStateChanged()

//array of all "get" fetch calls
const promises = [
    getUsers(),
    getEvents(),
    getNews(),
    getChats()
]

Promise.all(promises).then(() => {
    ShowLoginForm()
    ShowRegisterForm()
        //if the user is already logged in, go ahead and load the dashboard components and set the hidden input to the current user's ID
    if (currentUserId !== null) {
        //any time you want to get the current user's ID simply grab the value from #currentUserId like so: const currentUserId = document.querySelector("#currentUserId").value
        document.querySelector("#currentUserId").value = currentUserId
        loadDashboard()
    }
})