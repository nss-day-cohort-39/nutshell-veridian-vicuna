// function that represents form as HTML
const render = () => {
  return `
  <form>
        <input type="text" name="chatMessage" value="enter chat message" maxlength="140" autocomplete="off" required>
        <button class="chatPreview__button">SEND</button>
</form>
        `;
};

// function to render the form & export
export const ChatForm = () => {
  return render();
};
