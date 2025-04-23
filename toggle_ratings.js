const allRatings = document.querySelectorAll(".page_charts_section_charts_item_details_average_num")
const trackRatings = document.querySelectorAll(".page_release_section_tracks_track_stats_rating pipe_separated")
const singleRating = document.querySelector(".avg_rating")

function hide (rating) {
  rating.style.display = "none"
}

function hideRatings (ratings) {
  ratings.forEach((rating) => hide(rating))
}

if (allRatings) {
  hideRatings(allRatings)
} else {
  console.log("no ratings here buddy")
}

if (trackRatings) {
  hideRatings(trackRatings)
} else {
  console.log("no ratings here buddy")
}

if (singleRating) {
  hide(singleRating)
} else {
  console.log("no ratings here buddy")
}
