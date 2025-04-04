chrome.action.onClicked.addListener(tab =>
  chrome.userScripts.execute({
    target: { tabId: tab.id, allFrames: !0 },
    js: [{ code: `addEventListener("contextmenu",e=>e.stopImmediatePropagation(),1),addEventListener("selectstart",e=>e.stopImmediatePropagation(),1)` }]
  }).catch(() => 0)
);