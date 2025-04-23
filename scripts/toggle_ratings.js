const albumRatings = document.querySelectorAll(".page_charts_section_charts_item_details_average_num")
const trackRatings = document.querySelectorAll(".pipe_separated")
const singleRating = document.querySelector(".avg_rating")

function show(rating) {
  rating.style.visibility = "visible"
}

function showRatings(ratings) {
  ratings.forEach((rating) => show(rating))
}

function hide(rating) {
  rating.style.visibility = "hidden"
}

function hideRatings(ratings) {
  ratings.forEach((rating) => hide(rating))
}

function toggleRatings() {
  if (singleRating.style.visibility === "hidden") {
    show(singleRating)
    showRatings(albumRatings)
    showRatings(trackRatings)
  } else {
    hide(singleRating)
    hideRatings(albumRatings)
    hideRatings(trackRatings)
  }
}

// chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
//   if (message.action === "toggleRatings") {
//     console.log("messages passed aight")
//     toggleRatings()
//   }
// })
