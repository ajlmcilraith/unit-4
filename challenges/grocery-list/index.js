/* 
- Change the Text of My Title to "My Grocery List"
- Change the font color of the p tag to red
- Remove the bullets on the ul's
 */

document.querySelector("h1").innerText = "My Grocery List"

document.querySelector("p").style.color = "red" 

document.querySelectorAll("li").forEach((item) => {item.style.listStyleType = "none"})