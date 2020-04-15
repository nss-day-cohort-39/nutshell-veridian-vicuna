export const ChatHTML = (message, user) => {
    return `
        <div class="chatPreview__message">
            <p>${user.username}</p><p>${message.message}</p>
        </div> 
    `
}