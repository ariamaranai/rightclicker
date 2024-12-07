chrome.action.onClicked.addListener(
  e=> e.url[0]!="c" && chrome.scripting.executeScript({
    target: {tabId: e.id, allFrames: !0},
    world: "MAIN",
    func: ()=> addEventListener("contextmenu",e=>e.stopImmediatePropagation(),1)
  })
)
