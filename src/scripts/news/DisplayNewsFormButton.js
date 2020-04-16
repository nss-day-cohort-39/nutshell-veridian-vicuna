const eventHub = document.querySelector('.container')
const contentTarget = document.querySelector('.newsForm')

contentTarget.addEventListener('click', (clickEvent) => {
  if (clickEvent.target.id === 'showNewsForm') {
    // Create a custom event to tell any interested component that the user wants to see news
    const customEvent = new CustomEvent('newsFormButtonClicked')

    // Dispatch it to event hub
    eventHub.dispatchEvent(customEvent)
  }
})

export const DisplayNewsFormButton = () => {
  contentTarget.innerHTML =
    "<button id='showNewsForm' class='btnSmall marB1'>Show News Form</button>"
}
