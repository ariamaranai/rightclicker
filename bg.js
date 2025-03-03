chrome.action.onClicked.addListener(tab => {
  if (tab.url[0] != "c") {
    try {
      chrome.scripting.executeScript({
        target: { tabId: tab.id, allFrames: !0 },
        func: () => (
          addEventListener("contextmenu", e => e.stopImmediatePropagation(), 1),
          addEventListener("selectstart", e => e.stopImmediatePropagation(), 1)
        )
      })
    } catch (e) {}
  }
});