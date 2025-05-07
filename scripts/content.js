// listen to pages changing
// if hide === FALSE do nothing
// if hide === TRUE:
//  - match the URL can call the corresponding function (basically)

async function getIshidden() {
  const res = await chrome.storage.local.get({ "isHidden": false })
  return res.isHidden
}

async function processPage() {
  // get isHidden
  // get the URL
  // match the URL
  // call the function
  const isHidden = getIshidden()
  if (!isHidden) {
    console.log("no hiding here today buddy")
    return
  }

  const currentUrl = window.location.href
  console.log("URL HERE M8", currentUrl)
  if (currentUrl === "https://rateyourmusic.com/") {
    hideHompage()
  } else if (currentUrl.match(/https:\/\/rateyourmusic\.com\/charts\/.*/)) {
    hideChartsPage()
  } else if (currentUrl.match(/https:\/\/rateyourmusic\.com\/artist\/.*/)) {
    hideArtistPage()
  } else if (currentUrl.match(/https:\/\/rateyourmusic\.com\/release\/album\/.*/)) {
    hideAlbumPage()
  } else {
    console.log("WTF?? No paged matched?")
  }
}

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

function hideHompage() {
  console.log("I'm the homepage")
}

function hideChartsPage() {
  console.log("I'm the charts page")
}

function hideArtistPage() {
  console.log("I'm the artist page")
}

function hideAlbumPage() {
  console.log("I'm the album page")
}


chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {
  if (msg.action === 'hide_ratings') {
    processPage()
  } else {
    processPage()
  }
  sendResponse({status: "processed"})
  return true
})


document.addEventListener("DOMContentLoaded", () => {
  processPage()
})

processPage()
