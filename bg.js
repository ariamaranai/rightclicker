chrome.action.onClicked.addListener(async tab => {
  try {
    let target = { tabId: tab.id, allFrames: !0 };
    await chrome.scripting.insertCSS({
      target,
      css: "*{user-select:text!important}"
    });
    await chrome.scripting.executeScript({
      target,
      world: "MAIN",
      files: ["main.js"]
    });
  } catch {}
});