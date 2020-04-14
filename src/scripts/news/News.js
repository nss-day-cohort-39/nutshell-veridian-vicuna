// let date = new Date(UNIX_Timestamp * 1000)
export const News = (newsObj, news) => {
  return `
    <div class="panel">
      <h4>${news.name}</h4>
      <p><b>Synopsis:</b></p>
      <p>${newsObj.newsSynopsis}</p>
      <p><b>Timestamp:</b></p>
      <p>${new Date(newsObj.timestamp).toLocaleDateString()}</p>
    </div>
  </div>
  `
}
