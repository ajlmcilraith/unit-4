let startTimeout = document.getElementById("start-timeout")
let timeoutDisplay = document.getElementById("timeout-display")
let startInterval = document.getElementById("start-interval")
let intervalDisplay = document.getElementById("interval-display")

startInterval.style.display = none

startTimeout.addEventListener("click", (event) => {
  
  console.log(timeoutDisplay)
  timeoutDisplay.textContent = "Getting ready..."

  let timeout = setTimeout(() => {
    timeoutDisplay.textContent = "READY";
    startInterval.style.display = "block";
    startTimeout.style.display = "none"
  }, 5000);
})




startInterval.addEventListener("click", (event) => {
  console.log(event)
  timestamp = event.timeStamp


  let count = 5;
  intervalDisplay.textContent = count
  let interval = setInterval(() => {
    startInterval.disabled = true;
    if (count >0 ){
      intervalDisplay.style.color = "red";
      intervalDisplay.textContent = count
      count --
    } else if (count < 0 ) {
      intervalDisplay.style.color = "green"
      intervalDisplay.textContent = "GO"; clearInterval(interval)
      startInterval.disabled = false;
    }
  }, 1000);
})