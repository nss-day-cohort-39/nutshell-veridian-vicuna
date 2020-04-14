import { useChats } from "./chatProvider";

// query DOM for the element (.chat) that holds our chat list 
const contentTarget = document.querySelector(".chat")

// function to call the html representation of a chat message
export const renderChat = () => {
    contentTarget.innerHTML =  
}
// exported function that calls the render and builds the chat list