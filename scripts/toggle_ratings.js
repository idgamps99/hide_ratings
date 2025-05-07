const singleAlbumRating = document.querySelector(".avg_rating")
const albumRatings = document.querySelectorAll(".page_charts_section_charts_item_details_average_num")
const trackRatings = document.querySelectorAll(".pipe_separated")
const recommendations = document.querySelectorAll(".component_discography_item_details_average")
const homepageAlbums = document.querySelectorAll(".page_features_secondary_metadata_rating_final")
const homepageNewReleases = document.querySelectorAll(".newreleases_avg_rating_stat")
const artistPageAlbums = document.querySelectorAll(".enough_data")
const nextChart = document.querySelector(".ui_pagination_next")
const prevChart = document.querySelector(".ui_pagination_prev_label")

let globalIsHidden = false

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
    if (homepageAlbums) {
      hideRatings(homepageAlbums)
    }
    if (homepageNewReleases) {
      hideRatings(homepageNewReleases)
    }
    if (artistPageAlbums) {
      hideRatings(artistPageAlbums)
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
    if (homepageAlbums) {
      showRatings(homepageAlbums)
    }
    if (homepageNewReleases) {
      showRatings(homepageNewReleases)
    }
    if (artistPageAlbums) {
      showRatings(artistPageAlbums)
    }
  }
}

async function getIsHidden() {
  const res = await chrome.storage.local.get({ "isHidden": false })
  return res.isHidden
}

chrome.storage.local.get({ "isHidden": false}, (result) => {
  globalIsHidden = result.isHidden
  toggleRatings(globalIsHidden)
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

