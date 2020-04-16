// function that represents form as HTML
const render = (currentUserId) => {
  return `
        <input type="text" name="newMessage" id="newMessage" default="enter message" maxlength="140" autocomplete="off" required>
        <input type="hidden" id="messageUserId" value="${currentUserId}">
        <button class="chatPreview__button" id="sendMessage">SEND</button>
        `;
};

// function to render the form & export
export const ChatForm = (currentUserId) => {
  return render(currentUserId);
};


