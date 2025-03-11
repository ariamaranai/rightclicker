chrome.action.onClicked.addListener(tab =>
  chrome.scripting.executeScript({
    target: { tabId: tab.id, allFrames: !0 },
    func: () => (
      addEventListener("contextmenu", e => e.stopImmediatePropagation(), 1),
      addEventListener("selectstart", e => e.stopImmediatePropagation(), 1)
    )
  }).catch (() => 0)
);