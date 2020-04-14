import { News } from './News.js'
import { useNews } from './NewsProvider.js'

const eventHub = document.querySelector('.container')
const contentTarget = document.querySelector('.news')

eventHub.addEventListener('newsStateChanged', (customEvent) => {
  render()
})

// .news is wrap div
contentTarget.innerHTML = `
  <div class="headflexRow">
    <h2>News</h2>
    <button class="plusBtn">+</button>
  </div>
`

const render = (newsToRender) => {
  return newsToRender
    .map((newsObject) => {
      return News(newsObject)
    })
    .join('')
}
export const NewsList = () => {
  const news = useNews()
  contentTarget.innerHTML += `
    <div class="newsList">${render(news)}</div>
  `
}
