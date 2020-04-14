import { pageStateChanged } from "./appController.js";
import { ShowLoginForm } from "./userAuth/LoginForm.js";
import { ShowRegisterForm } from "./userAuth/RegisterForm.js";
import { getUsers } from "./users/userProvider.js";
import "./userAuth/loginUser.js"
import { userArea } from "./users/userArea.js";

pageStateChanged()

const promises = [
    getUsers()
]

Promise.all(promises)
    .then(() => {
        ShowLoginForm()
        ShowRegisterForm()
        userArea()
    })