chrome.action.onClicked.addListener(e=>e.url.slice(0,6)!="chrome"&&chrome.scripting.executeScript({target:{tabId:e.id,allFrames:!0},world:"MAIN",injectImmediately:!0,func:()=>addEventListener("contextmenu",e=>e.stopImmediatePropagation(),1)}))