chrome.action.onClicked.addListener(tab => {
  let target = { tabId: tab.id, allFrames: !0 };
  try {
    chrome.userScripts.execute({
      target,
      js: [{ code: 'addEventListener("contextmenu",e=>e.stopImmediatePropagation(),1),addEventListener("selectstart",e=>e.stopImmediatePropagation(),1)' }]
    });
    chrome.scripting.insertCSS({
      target,
      css: "*{user-select:text!important}"
    });
  } catch (e) {}
});