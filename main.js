// Joan Aneas (joananeas on Github)
browser.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (tab.url.startsWith("https://www.youtube.com/shorts")) {
      const newUrl = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"; // Redirige siempre a esta URL
      browser.tabs.update(tabId, { url: newUrl });
    }
  });

  //Debugger
  //document.body.style.border = "5px solid red";
