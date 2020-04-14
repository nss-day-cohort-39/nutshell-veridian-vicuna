// let date = new Date(UNIX_Timestamp * 1000)
export const News = (newsObj) => {
  return `
    <div class="box">
      <h4><a href="${newsObj.url}" target="_blank">${newsObj.title}</a></h4>
      <p>${newsObj.synopsis}</p>
      <p class="timestamp">${new Date(
        newsObj.timestamp
      ).toLocaleDateString()}</p>
    </div>
  `
}
