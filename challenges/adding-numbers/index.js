//TODO 
// * be able to grab value 1 and value 2 
// * function to be called when the user clicks on the button 
// *  - function should add the two numbers and return the result
// *  - function should display the result on the page

let input1 = document.getElementById("first-number")
let input2 = document.getElementById("second-number")



let form = document.querySelector("form") //could also do getElementByTagName("form")

//nth child for number child, 

let submitButton = document.getElementById("submit")

form.addEventListener("submit", handleSubmit)

// submitButton.addEventListener("click", (event) => {
//   event.preventDefault()
//   console.log(`first value is ${input1}, second value is ${input2}`)
//   console.log(input1)
// })

//we want the event listener on the form, not the button

let result = document.getElementById("result")

function handleSubmit(event) {
  event.preventDefault()
  console.log("handleSubmit worked")

  // ? Make an if statement to alert us if it detects NaN - using isNaN()

  if ( isNaN(input1.value) || isNaN(input2.value) ) {
    alert("You have typed in an invalid value: your input must be a number")
    return
  }

  let total = +input1.value + +input2.value

  // alert(`The sum of ${input1.value} and ${input2.value} is ${total}`)

  result.innerText = `The sum of ${input1.value} and ${input2.value} is ${total}`

  
}