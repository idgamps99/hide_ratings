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
  console.log(ratings)
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

// chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
//   if (message.action === "toggleRatings") {
//     console.log("messages passed aight")
//     toggleRatings()
//   }
// })


let hidden = true
toggleRatings(hidden)
