import { useChats, saveChats } from "./chatProvider.js";
import { ChatHTML } from "./Chat.js";
import { useUsers } from "../users/userProvider.js";
import { ChatForm } from "./ChatForm.js";

// query DOM for the element (.chat) that holds our chat list
const contentTarget = document.querySelector(".chat");
const eventHub = document.querySelector(".container");
let newMessage = ""

// event listener that re-renders the chat on message state change (new messages)
eventHub.addEventListener("chatStateChanged", (customEvent) => {
  if (newMessage !== "") {
    render();
  } else {
    alert('Please enter a chat message.')
  }
});

// function to call the html representation of a chat message
const render = () => {
  // iterate through the full array of messages and convert each one to HTML representation
  const users = useUsers();
  const messages = useChats();

  contentTarget.innerHTML = `
    <article class="chatPreview">
        ${messages
          .map((message) => {
            // check the userId of the current message and send the corresponding user object
            const user = users.find((user) => user.id === message.userId);
            return ChatHTML(message, user);
          })
          .join("")}
        <div class="chatPreview__form">${ChatForm()}</div>
    </article>
    `;
};

// event listener
contentTarget.addEventListener("click", (clickEvent) => {
  if (clickEvent.target.id === "sendMessage" && ) {
    newMessage = document.querySelector("#newMessage").value;
    const userId = parseInt(sessionStorage.getItem('activeUser'))
    const newMessageObject = {
      userId: userId,
      message: newMessage,
    };
    saveChats(newMessageObject);
  }
});

// function that builds the chat list from full array of chat messages
export const ChatList = () => {
  
  render();
};
