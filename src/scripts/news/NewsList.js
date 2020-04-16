import { News } from './News.js'
import { NewsForm } from './NewsForm.js'
import { useNews } from './newsProvider.js'

const eventHub = document.querySelector('.container')
const contentTarget = document.querySelector('.news')

eventHub.addEventListener('newsStateChanged', (customEvent) => {
  render()
})

// .news is wrap div
contentTarget.innerHTML = `
  <div class="headflexRow">
    <h2>News</h2>
    <button id="plusBtn">+</button>
  </div>
`

const render = (newsToRender) => {
  return newsToRender
    .map((newsObject) => {
      return News(newsObject)
    })
    .join('')
}
export const NewsList = (currentUserId) => {
  const news = useNews()
  contentTarget.innerHTML += `
    <div id="newsForm"></div>
    <div class="newsList">${render(news)}</div>
  `
}

contentTarget.addEventListener('click', (clickEvent) => {
  if (clickEvent.target.id === 'plusBtn') {
    const customEvent = new CustomEvent('newsFormButtonClicked')
    eventHub.dispatchEvent(customEvent)
    // console.log('.plusBtn clicked!!')
    NewsForm()
  }
})
