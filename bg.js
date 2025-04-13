chrome.action.onClicked.addListener(tab => {
  let target = { tabId: tab.id, allFrames: !0 };
  chrome.userScripts.execute({
    target,
    js: [{ code: `addEventListener("contextmenu",e=>e.stopImmediatePropagation(),1),addEventListener("selectstart",e=>e.stopImmediatePropagation(),1)` }]
  }).catch(() => 0);
  chrome.scripting.insertCSS({
    target,
    css: "*{user-select:text!important}"
  }).catch(() => 0);
});