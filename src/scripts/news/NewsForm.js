import { saveNews, useNews } from './newsProvider.js'

const eventHub = document.querySelector('.container')
const contentTarget = document.querySelector('.newsForm')

let visibility = false

eventHub.addEventListener('newsFormButtonClicked', (customEvent) => {
  visibility = !visibility

  if (visibility) {
    contentTarget.classList.remove('hide')
  } else {
    contentTarget.classList.add('hide')
  }
})

// Handle browser-generated click event in component
contentTarget.addEventListener('click', (clickEvent) => {
  if (clickEvent.target.className === 'saveNews') {
    const newsHead = document.querySelector('.newsHead').value
    const newsSynopsis = document.querySelector('.newsSynopsis').value
    const newsUrl = document.querySelector('.newsUrl').value

    // Make a new object representation of a news
    const newNews = {
      newsHead: newsText,
      newsSynopsis: newsText,
      newsUrl: newsText,
      // timestamp: Date.now(),
    }

    // Change API state and application state
    saveNews(newNews)
  }
})

const render = () => {
  contentTarget.classList.add('hide')
  const allNews = useNews()

  contentTarget.innerHTML = `
    <div class="formWrap">
      <form class="panel dh-Form marB1">

        <label for="newsSuspect">Suspect:</label>

        <label for="newsText">News:</label>
        <textarea type="text" id="newsText" rows=5></textarea>

        <button id="saveNews" class="btnSmall marT1">Save News</button>
      </form>
    </div>
  `
}

export const NewsForm = () => {
  render()
}
