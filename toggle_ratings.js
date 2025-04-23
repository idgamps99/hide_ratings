const allRatings = document.querySelectorAll(".page_charts_section_charts_item_details_average_num")
const singleRating = document.querySelector(".avg_rating")

if (allRatings) {
  console.log("ALL RATINGS HIDDEN")
  allRatings.forEach((rating) => rating.style.display = "none")
} else if (singleRating) {
  console.log("SINGLE RATING HIDDEN")
  singleRating.style.display = "none"
} else {
  console.log("NOTHING SELECTED HERE COWBOY")
}
