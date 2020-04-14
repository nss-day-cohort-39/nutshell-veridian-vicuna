import { useChats } from "./chatProvider.js";
import { ChatHTML } from "./Chat.js";

// query DOM for the element (.chat) that holds our chat list 
const contentTarget = document.querySelector(".chat")

// function to call the html representation of a chat message
const render = (messages) => {
    return messages.map(message => {

        return contentTarget.innerHTML += ChatHTML(message)

    }).join("")
}

// exported function that calls the render and builds the chat list
export const ChatList = () => {
    const messages = useChats()
    render(messages)
}