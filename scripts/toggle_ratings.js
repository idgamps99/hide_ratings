const singleAlbumRating = document.querySelector(".avg_rating")
const albumRatings = document.querySelectorAll(".page_charts_section_charts_item_details_average_num")
const trackRatings = document.querySelectorAll(".pipe_separated")
const recommendations = document.querySelectorAll(".component_discography_item_details_average")

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

function toggleRatings(hidden) {
  if (hidden) {
    if (singleAlbumRating) {
      hide(singleAlbumRating)
    }
    if (albumRatings) {
      hideRatings(albumRatings)
    }
    if (trackRatings) {
      hideRatings(trackRatings)
    }
    if (recommendations) {
      hideRatings(recommendations)
    }
  } else {
    if (singleAlbumRating) {
      show(singleAlbumRating)
    }
    if (albumRatings) {
      showRatings(albumRatings)
    }
    if (trackRatings) {
      showRatings(trackRatings)
    }
    if (recommendations) {
      showRatings(recommendations)
    }
  }
}

chrome.storage.local.get({ "isHidden": false}, (result) => {
  toggleRatings(result.isHidden)
})


chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {
  if (msg.action === 'hide_ratings') {
    toggleRatings(true)
  } else {
    toggleRatings(false)
  }
  sendResponse({status: "processed"})
  return true
})
