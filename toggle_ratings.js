const allRatings = document.querySelectorAll(".page_charts_section_charts_item_details_average_num")
const trackRatings = document.querySelectorAll(".pipe_separated")
const singleRating = document.querySelector(".avg_rating")

function hide (rating) {
  rating.style.visibility = "hidden"
}

function hideRatings (ratings) {
  ratings.forEach((rating) => hide(rating))
}

if (allRatings) {
  hideRatings(allRatings)
} else {
  console.log("no ratings here buddy 1")
}

if (trackRatings) {
  hideRatings(trackRatings)
} else {
  console.log("no ratings here buddy 2")
}

if (singleRating) {
  hide(singleRating)
} else {
  console.log("no ratings here buddy 3")
}
