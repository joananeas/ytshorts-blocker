// Joan Aneas (joananeas on Github)
/*browser.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === "complete" && tab.url.startsWith("https://www.youtube.com/shorts")) {
      const newUrl = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"; //RickRoll for wasting time
      browser.tabs.update(tabId, { url: newUrl });
    }

  });
*/
  //Debugger
  document.body.style.border = "5px solid red";
  browser.tabs.update(tabId, { url: newUrl }).then(() => {
    if (changeInfo.status === "complete" && tab.url.startsWith("https://www.youtube.com/shorts")) {
      const newUrl = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"; //RickRoll for wasting time
      browser.tabs.update(tabId, { url: newUrl });
    }
  }).catch(error => {
    console.error(error);
  });