// Joan Aneas (joananeas on Github)
browser.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === "complete" && tab.url.startsWith("https://www.youtube.com/shorts")) {
      const newUrl = tab.url.replace(/\/shorts.*$/, ""); 
      browser.tabs.update(tabId, { url: newUrl });
    }
  });