chrome.action.onClicked.addListener(e=>chrome.scripting.executeScript({target:{tabId:e.id,allFrames:!0},func:()=>addEventListener("contextmenu",e=>e.stopImmediatePropagation(),1),world:"MAIN"}))
