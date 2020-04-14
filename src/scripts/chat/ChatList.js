import { useChats } from "./chatProvider.js";
import { ChatHTML } from "./Chat.js";
import { useUsers } from "../users/userProvider.js";
import { ChatForm } from "./ChatForm.js";

// query DOM for the element (.chat) that holds our chat list
const contentTarget = document.querySelector(".chat");

// function to call the html representation of a chat message
const render = (messages) => {
  // iterate through the full array of messages and convert each one to HTML representation
  const users = useUsers();

  contentTarget.innerHTML = `
    <article class="chatPreview">
        ${messages
          .map((message) => {
            // check the userId of the current message and send the corresponding user object
            const user = users.find((user) => user.id === message.userId);
            return ChatHTML(message, user);
          })
          .join("")}
        <div class="chatPreview__form"></div>
    </article>
    `;
};

// function that builds the chat list from full array of chat messages
export const ChatList = () => {
  const messages = useChats();
  render(messages)
  ChatForm();
};
