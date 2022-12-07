/* 
 ? Login Form

 * Create a form in your index.html that consists of:
 * email & password inputs
 * make sure to give it basic styling with flex or grid to center it
 * create a "submit" button that when pressed will take the content out of the form and update a makeshift db array
*/

let emailInput = document.getElementById("email")
let passwordInput = document.getElementById("password")
let submitButton = document.getElementById("submit")

submitButton.addEventListener("click", (event) => {
  event.preventDefault()//prevents default refresh action
  
  console.log("button clicked")
  console.log(event.target.form[0].value,event.target.form[1].value)

  db.push(
    {
      email: event.target.form[0].value, 
      password: event.target.form[1].value
    }
  )
  for (i of db) {
    let p = document.createElement("p")
    p.textContent = `${i.email}, ${i.password}`
    document.body.appendChild(p)
  }
})



let db = []