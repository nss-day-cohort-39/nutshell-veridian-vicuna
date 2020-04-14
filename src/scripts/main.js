import { EventList } from './events/EventList.js'
import { getEvents } from './events/eventProvider.js'
import { NewsForm } from './news/NewsForm.js'
import { NewsList } from './news/NewsList.js'
import { getNews } from './news/NewsProvider.js'

getNews() //
  .then(NewsList)
  .then(NewsForm)

getEvents() //
  .then(EventList)
