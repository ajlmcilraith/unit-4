//TODO: create a function that will conduct the fetch

async function asyncChuckFetch() {

  try{
    const url = `https://api.chucknorris.io/jokes/random`
    const response = await fetch(url)//fetch is a promise
    const jokeData = await response.json()
    console.log(jokeData)
    displayHistory(jokeData.value)
  } catch(err) {
    console.err(err.message)
  }

}

asyncChuckFetch()

// recipe for create element
// 1. grab the parent and store it in a variable (ul)
// 2. create a new element that will be placed on the parent (li)
// 3. replace the innerText of the new element
// 4. append the child to the parent

function displayHistory(joke) {
  let historyList = document.getElementById("history")// parent
  let currentJokeToBeAddedElement = document.createElement("li")// Child
  currentJokeToBeAddedElement.innerText = joke;
  historyList.append(currentJokeToBeAddedElement)

}