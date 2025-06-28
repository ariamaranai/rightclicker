chrome.action.onClicked.addListener(async tab => {
  try {
    let target = { tabId: tab.id, allFrames: !0 };
    await chrome.userScripts.execute({
      target,
      js: [{ code: 'addEventListener("contextmenu",e=>e.stopImmediatePropagation(),1),addEventListener("selectstart",e=>e.stopImmediatePropagation(),1)' }]
    });
    await chrome.scripting.insertCSS({
      target,
      css: "*{user-select:text!important}"
    });
  } catch {}
});