import { News } from './News.js'
import { getNews, useNews } from './NewsDataProvider.js'

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

const render = () => {
  if (visibility) {
    contentTarget.classList.remove('hide')
  } else {
    contentTarget.classList.add('hide')
  }

  getNews().then(() => {
    const allTheNews = useNews()

    contentTarget.innerHTML = allTheNews
      .map((currentNewsObject) => {
        // Find the criminal for the current news
        const theFoundCriminal = allTheCriminals.find(
          (currentCriminalObject) => {
            return currentNewsObject.criminal === currentCriminalObject.id
          }
        )

        return News(currentNewsObject, theFoundCriminal)
      })
      .join('')
  })
}

export const NewsList = () => {
  render()
}
