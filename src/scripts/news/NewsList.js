import { News } from './News.js'
import { useNews } from './NewsProvider.js'

const eventHub = document.querySelector('.container')
const contentTarget = document.querySelector('.news')

eventHub.addEventListener('newsStateChanged', (customEvent) => {
  render()
})

const render = (newsToRender) => {
  return newsToRender
    .map((newsObject) => {
      return News(newsObject)
    })
    .join('')
}

export const NewsList = () => {
  const news = useNews()
  contentTarget.insertAdjacentHTML(
    'afterbegin',
    `<h3>News</h3>
     ${render(news)}`
  )
}
