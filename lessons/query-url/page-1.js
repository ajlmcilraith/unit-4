console.log("page 1 works")

let pageLink = document.getElementById("page-link")

let player1Score = 1900

let product = "potato"

pageLink.href = `./page-2.html?player1=${player1Score}&product=${product}`
//order doesn't matter

function goToNextPage() {
  window.location.href = `./page-2.html?player1=${player1Score}&product=${product}`;
}
