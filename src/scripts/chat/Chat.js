export const ChatHTML = (message, user) => {
    return `
        <div class="chatPreview__message">
            <p id="chatUser">${user.username}</p><p>${message.message}</p>
        </div> 
    `
}