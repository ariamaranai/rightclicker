chrome.action.onClicked.addListener(async tab => {
  try {
    let target = { tabId: tab.id, allFrames: !0 };
    await chrome.scripting.insertCSS({
      target,
      css: "*{user-select:text!important}"
    });
    await chrome.userScripts.execute({
      target,
      js: [{ code: '{let f=e=>e.stopImmediatePropagation();addEventListener("contextmenu",f,1),addEventListener("selectstart",f,1),addEventListener("copy",f,1)}' }]
    });
  } catch {}
});