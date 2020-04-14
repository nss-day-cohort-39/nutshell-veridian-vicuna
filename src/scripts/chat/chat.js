export const ChatHTML = (message) => {
    return `
        <div class="chat__message">
            <p></p><p>${message.message}</p>
        </div> 
    `
}