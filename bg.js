onunhandledrejection = e => e.preventDefault();
chrome.action.onClicked.addListener(tab => {
  let target = { tabId: tab.id, allFrames: !0 };
  let { scripting } = chrome;
  scripting.insertCSS({
    target,
    css: "*{user-select:text!important;-webkit-user-select:text!important}"
  });
  scripting.executeScript({
    target,
    world: "MAIN",
    files: ["main.js"]
  });
});
