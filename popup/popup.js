const hideHeader = document.querySelector(".hide")
const showHeader = document.querySelector(".show")
const slider = document.querySelector("input")

function toggleHeader () {
  if (hideHeader.style.display === "none") {
    hideHeader.style.display = "block"
    showHeader.style.display = "none"
  } else {
    hideHeader.style.display = "none"
    showHeader.style.display = "block"
  }
}

slider.addEventListener("change", () =>
  toggleHeader()
  // chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  // chrome.tabs.sendMessage(tabs[0].id, {action: "toggleRatings"});
// })
)
// slider.addEventListener("change", toggleHeader)
