import { pageStateChanged } from "./appController.js";
import { ShowLoginForm } from "./userAuth/LoginForm.js";
import { ShowRegisterForm } from "./userAuth/RegisterForm.js";
import { getUsers } from "./users/userProvider.js";
import "./userAuth/loginUser.js"
import { loadDashboard } from "./loadDashboard.js";

const currentUserId = sessionStorage.getItem("activeUser")

pageStateChanged()

const promises = [
    getUsers()
]

Promise.all(promises)
    .then(() => {
        ShowLoginForm()
        ShowRegisterForm()
        if (currentUserId !== null) {
            loadDashboard(currentUserId)
        }
    })