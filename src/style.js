
//  Select and cache the <main> element in a variable named mainEl.
const mainEl = document.querySelector("main")

// Set the background color of mainEl to the value stored in the --main-bg CSS custom property.
mainEl.style.backgroundColor = "#4a4e4d"

const newDomText = document.createElement("h1")
newDomText.textContent = "Dom Manipulation"
mainEl.appendChild(newDomText) 
mainEl.style.display = "flex"
mainEl.style.justifyContent = "center"
mainEl.style.alignItems = "center"
