// let date = new Date(UNIX_Timestamp * 1000)
export const News = (newsObj) => {
  return `
    <div class="box newsPanel">
      <h4><a href="${newsObj.url}" target="_blank">${newsObj.title}</a></h4>
      <p><b>Synopsis:</b> ${newsObj.synopsis}</p>
      <p><b>Timestamp:</b> ${new Date(
        newsObj.timestamp
      ).toLocaleDateString()}</p>
    </div>
  </div>
  `
}
