// ? Review DOM selector
let listItem = document.querySelectorAll(".list-item")
listItem[0].textContent = "Get milk and bread"

// ? How to create an element

document. createElement("li")

let li = document.createElement("li")
li.textContent = "Get more project time"
li.className = "list-item"
// li.style.color = "red"
console.log(li)

let list = document.getElementsByClassName("list")[0] 

console.log(list)

list.appendChild(li)

// class selector returns html collection -> will update dom-created elements

// query selector returns node list -> does not update dom-created elements

// ! event listeners

/* 
  * allows us to listen for an event and trigger a function when it occurs
  *utilizes .addEventListener method on a target element
      * takes an event as a string (first parameter)
      * takes a callback fx that fires when event occurs
      * .addEventListener ("eventName", (event) => { callback fx })
*/

let input = document.querySelector(".input")
//                     event   callback function
// input.addEventListener("keyup", (event) => {
//   console.log(event.target.value)
// })

let btn = document.querySelector(".submit")

btn.addEventListener("click", (e) => {
  console.log(input.value)
  //create new element
  let li = document.createElement("li")
  //append the value of what's in input to the element
  li.textContent = input.value 
  // give new element a class name for styling purposes
  li.className = "list-item"
  //append new item to our list
  list.appendChild(li)
  //to clear input field:
  input.value = ""
})

let removeButton = document.querySelector(".remove")

removeButton.addEventListener("click", (event) => {
  console.log(event)
  
  // let items = Object.values(allItems)
  // items.forEach(i => console.log(i.textContent))


  //to remove an item you input
//   for (i of allItems) {
//     if (i.textContent == input.value) {
//         i.remove()
//     } else {
//         alert("The entry does not exist")
//     }
// }


  list.removeChild(list.lastElementChild)
})