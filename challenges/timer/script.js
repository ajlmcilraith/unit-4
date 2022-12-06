let startTimeout = document.getElementById("start-timeout")
let timeoutDisplay = document.getElementById("timeout-display")
let startInterval = document.getElementById("start-interval")
let intervalDisplay = document.getElementById("interval-display")

startTimeout.addEventListener("click", (event) => {
  console.log(timeoutDisplay)
  timeoutDisplay.textContent = "Getting ready..."
  let timeout = setTimeout(() => {
    timeoutDisplay.textContent = "READY"
  }, 5000);
})

startInterval.addEventListener("click", (event) => {
  let count = 5;
  intervalDisplay.textContent = count
  let interval = setInterval(() => {
    count = count -1
    intervalDisplay.textContent = count
    if (count <= 0 ) {intervalDisplay.textContent = "GO"; clearInterval(interval)}
  }, 1000);
})