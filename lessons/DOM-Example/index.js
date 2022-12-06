console.log("running from index.js")

// use getElementById to change the text of the id="header" to "hello world"

/* 
1. create a variable to store the header element
2. document.getElementById(id name)
*/

let header = document.getElementById("header");
console.log(header.innerText)

// innerText is the text inbetween the two tags
//InnerHTML will convert HTML code while innerText will treat it as a string literal
header.innerHTML = `<em>Hello World</em>`

// ? Change the color of the header to blue

header.style.color = "blue";

// ?  change the font size

header.style.fontSize = "2.5em"

// * getElementsByClassName 

errorList = document.getElementsByClassName("error-list")

console.log(errorList)

// ? Change the first bullet point inner text to "the first error has changed"

errorList[0].innerText = "The first error has changed"

errorList [1].style.color = "red"

// ? Create a for loop that loop through the error-list and change all the colors to purple

//for in loops through objects, for of loops through arrays and strings

//for of returns the item not the index

for(error of errorList) {
  //errorList[i].style.color = "purple"
  console.log(error)
  error.style.color = "purple"
}

// * getElementsByTagName

let pTags = document.getElementsByTagName("p")

console.log(pTags)

listTags = document.getElementsByTagName("li")

listTags[0].style.fontStyle = "italic"


// ! querySelector
// - querySelector - it will only give you the first element that meets the requirements.

// ? Store the first H1 tag using querySelector
let querySelectorHeader = document.querySelector("h1");
console.log("querySelector header", querySelectorHeader.innerText);

// ? consol.log the innerText of para as the ID using querySelector

let querySelectorIdExample = document.querySelector("#para");
console.log(querySelectorIdExample.innerText);

let querySelectorClassExample = document.querySelector(".error-list");
console.log("querySelectorClassExample", querySelectorClassExample.innerText);

// ! querySelectorAll
// - querySelectorAll will give you all the elements that match the requirements

let querySelectorAllHeaders = document.querySelectorAll("h1");
console.log("querySelectorAllHeaders", querySelectorAllHeaders);

let querySelectorAllHeader3 = document.querySelectorAll("h3");
console.log("querySelectorAllHeader3", querySelectorAllHeader3);
