let nameForm = document.getElementById("name-form")
let computerResponse = document.getElementById("computer-response")
let userInput = document.getElementById("user-input")

let enemyArray = ["Darth Vader", "Bendak Starkiller", "Malak", "Kylo Ren"]
console.log(userInput)
// let userInputValue;
// console.log(userInputValue)

nameForm.addEventListener("submit", (event) => {
  event.preventDefault();
  let userInputValue = userInput.value;
  console.log(userInputValue)
  enemyArray.includes(userInputValue) 
  ? computerResponse.textContent = "Go away!" 
  : computerResponse.textContent = `Hello ${userInputValue}, I am glad you are not an enemy.`
})

