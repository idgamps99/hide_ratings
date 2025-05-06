export function toggleHeader(hidden, visibleHeader, hiddenHeader, slider) {
  if (hidden) {
    hiddenHeader.style.display = "block"
    visibleHeader.style.display = "none"
    slider.checked = true
  } else {
    visibleHeader.style.display = "block"
    hiddenHeader.style.display = "none"
    slider.checked = false
  }
}

export function initializeState(visibleHeader, hiddenHeader, slider) {
  chrome.storage.local.get({ "isHidden": false}, (result) => {
    const hidden = result.isHidden
    toggleHeader(hidden, visibleHeader, hiddenHeader, slider)
  })
}

export function determineMessage(hidden) {
  return hidden ? "hide_ratings" : "show_ratings"
}

export function getStorageValue(key, defaultValue) {
  return new Promise((resolve) => {
    chrome.storage.local.get({ [key]: defaultValue}, (result) => {
      resolve(result[key])
    })
  })
}

export function setIsHidden(value) {
  return new Promise((resolve) => {
    chrome.storage.local.set({ "isHidden": value }, resolve)
  })
}

export function sendMessageToActiveTab(action) {
  return new Promise((resolve) => {
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
      if (tabs.length === 0) {
        resolve()
        return
      }

      chrome.tabs.sendMessage(tabs[0].id, {action}, (response) => {
        console.log("Message send:", action)
        resolve(response)
      })
    })
  })
}
