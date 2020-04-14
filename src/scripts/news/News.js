// let date = new Date(UNIX_Timestamp * 1000)
export const News = (newsObj) => {
  return `
    <div class="box marBH">
      <h3>${newsObj.name}</h3>
      <p><b>Synopsis:</b></p>
      <p>${newsObj.newsSynopsis}</p>
      <p><b>Timestamp:</b></p>
      <p>${new Date(newsObj.timestamp).toLocaleDateString()}</p>
    </div>
  </div>
  `
}
