// function that represents form as HTML
const render = () => {
  return `
  <form>
    <input
      type="text"
      name="chatMessage"
      value=""
      maxlength="140"
      autocomplete="off"
      placeholder="Enter message..."
      required
    >
    <button class="chatPreview__button">SEND</button>
  </form>
  `
}

// function to render the form & export
export const ChatForm = () => {
  return render()
}
