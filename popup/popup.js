const visibleHeader = document.querySelector(".visible")
const hiddenHeader = document.querySelector(".hidden")
const slider = document.querySelector("input")

function toggleHeader(hidden) {
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

async function getIsHidden() {
  const result = await chrome.storage.local.get(["isHidden"])
  return result.isHidden
}

function setIsHidden(hidden) {
  chrome.storage.local.set({ "isHidden": hidden }).then(() => {
    console.log("Value is set");
  })
}

function initializeState() {
  chrome.storage.local.get({ "isHidden": false}, (result) => {
    const hidden = result.isHidden
    toggleHeader(hidden)
  })
}

function determineMessage(hidden) {
  if (hidden) {
    return "hide_ratings"
  }
  return "show_ratings"
}

// initialize toggle state
document.addEventListener("DOMContentLoaded", initializeState)

// when toggled, tell the script to run
slider.addEventListener("change", () => {
  chrome.storage.local.get({ "isHidden": false }, (result) => {
    const currentHidden = result.isHidden
    const newHidden = !currentHidden

    // Update UI
    toggleHeader(newHidden)

    // Save to storage
    setIsHidden(newHidden)

    // Send message to content script
    const message = determineMessage(newHidden)
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {action: message}, function(response) {
        console.log("Message sent:", message)
      })
    })
  })
})


