const eventHub = document.querySelector('.container')
const contentTarget = document.querySelector('.newsForm')

contentTarget.addEventListener('click', (clickEvent) => {
  if (clickEvent.target.id === 'showNoteForm') {
    // Create a custom event to tell any interested component that the user wants to see notes
    const customEvent = new CustomEvent('noteFormButtonClicked')

    // Dispatch it to event hub
    eventHub.dispatchEvent(customEvent)
  }
})

export const DisplayNoteFormButton = () => {
  contentTarget.innerHTML =
    "<button id='showNoteForm' class='btnSmall marB1'>Show Note Form</button>"
}
