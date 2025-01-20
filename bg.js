chrome.action.onClicked.addListener(tab =>
  tab.url[0] != "c" && chrome.scripting.executeScript({
    target: { tabId: tab.id, allFrames: !0 },
    world: "MAIN",
    func: () => (
      addEventListener("contextmenu", e => e.stopImmediatePropagation(), 1),
      addEventListener("selectstart", e => e.stopImmediatePropagation(), 1)
    )
  })
);