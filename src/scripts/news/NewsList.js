import { News } from './News.js'
import { getNews, useNews } from './NewsProvider.js'

const eventHub = document.querySelector('.container')
const contentTarget = document.querySelector('.news')

let visibility = true

eventHub.addEventListener('newsStateChanged', (customEvent) => {
  render()
})

eventHub.addEventListener('allNewsClicked', (customEvent) => {
  visibility = !visibility

  if (visibility) {
    contentTarget.classList.remove('hide')
  } else {
    contentTarget.classList.add('hide')
  }
})

contentTarget.innerHTML = `<h3>News</h3>`

const render = () => {
  if (visibility) {
    contentTarget.classList.remove('hide')
  } else {
    contentTarget.classList.add('hide')
  }

  getNews().then(() => {
    const allTheNews = useNews()

    contentTarget.innerHTML += allTheNews
      .map((currentNewsObject) => {
        return News(currentNewsObject)
      })
      .join('')
  })
}

export const NewsList = () => {
  render()
}
