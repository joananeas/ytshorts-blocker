browser.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === "complete" && tab.url === "https://www.youtube.com/shorts") {
      browser.tabs.update(tabId, { url: "https://www.youtube.com" });
    }
  });