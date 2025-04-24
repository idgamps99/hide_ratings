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

document.addEventListener('DOMContentLoaded', initializeState);


slider.addEventListener("change", () => {
  chrome.storage.local.get({ "isHidden": false }, (result) => {
    const currentHidden = result.isHidden;
    const newHidden = !currentHidden;

    toggleHeader(newHidden);
    setIsHidden(newHidden);
  });
});

// 1. fetch 'isHidden' value
//    if value exists
//      assign it to let hidden
//    else
//      initialise it to let hidden
// 2. listen to 'change event'
//      call toggleHeader using hidden variable
//      assign hidden to opposite of itself
//      set new value of hidden in local storage
