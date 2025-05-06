import * as Utils from "./utils.js"

const visibleHeader = document.querySelector(".visible")
const hiddenHeader = document.querySelector(".hidden")
const slider = document.querySelector("input")

document.addEventListener("DOMContentLoaded", () => {
  Utils.initializeState(visibleHeader, hiddenHeader, slider)
})

slider.addEventListener("change", async () => {
  try {
    const currentHidden = await Utils.getStorageValue("isHidden", false)
    const newHidden = !currentHidden

    Utils.toggleHeader(newHidden, visibleHeader, hiddenHeader, slider)

    await Utils.setIsHidden(newHidden)

    await Utils.sendMessageToActiveTab(Utils.determineMessage(newHidden))

    console.log("Visibility setting updated:", newHidden ? "hidden" : "visible")
  } catch (error) {
    console.log("Error toggling visibility", error)
  }
})

// // when toggled, tell the script to run
// slider.addEventListener("change", () => {
//   chrome.storage.local.get({ "isHidden": false }, (result) => {
//     const currentHidden = result.isHidden
//     const newHidden = !currentHidden

//     // Update UI
//     toggleHeader(newHidden)

//     // Save to storage
//     setIsHidden(newHidden)

//     // Send message to content script
//     const message = determineMessage(newHidden)
//     chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//       chrome.tabs.sendMessage(tabs[0].id, {action: message}, function(response) {
//         console.log("Message sent:", message)
//       })
//     })
//   })
// })
