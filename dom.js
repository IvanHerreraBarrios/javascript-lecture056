/*
console.log("Document elements")
console.log(window.document)
console.log(document) //doctype and HTML
console.log(document.head)
console.log(document.body)
console.log(document.documentElement) //HTML
console.log(document.doctype)
console.log(document.characterSet) //UTF 8 
console.log(document.title)
console.log(document.links) //ITS NOT AN ARRAY
console.log(document.images)
console.log(document.forms)
console.log(document.styleSheets)
console.log(document.scripts) //1 = dom, 2 = liveServer
setTimeout(() => {
    console.log(document.getSelection().toString) //What I select
}, 2000);

//Obsolete
document.write("<h2>Hello World from DOM</h2>")
*/

/*
//old buh
console.log(document.getElementsByTagName("li")) //all li, it is not an array
console.log(document.getElementsByClassName("card"))
console.log(document.getElementsByName("name")) // example forms


//new
console.log(document.querySelector("#menu")) //id but USE #, class, tags
console.log(document.getElementById("menu")) //its fast
console.log(document.querySelector("a")) //tag 
console.log(document.querySelectorAll("a")) //tag 
document.querySelectorAll("a").forEach(el => console.log(el)) //tag 
console.log(document.querySelector(".card"))
console.log(document.querySelectorAll(".card")[2])
console.log(document.querySelectorAll("#menu li")) //All <li> </li> in menu
console.log(document.querySelector("#menu li"))
//node list, NOT AN ARRAY

//atributtes <data-anythin = "Anything 1"> name href etc
*/

/*
console.log(document.documentElement.lang) //lang in tah <lang=>
console.log(document.documentElement.getAttribute("lang"))
console.log(document.querySelector(".link-dom".href)) //find class, and href => url live server
console.log(document.querySelector(".link-dom".getAttribute("href"))) //dom.html

document.documentElement.lang = "en" //change tag
console.log(document.documentElement.lang)
document.documentElement.setAttribute("lang", "es-Mx")

// $variable = save DOM
const $linkDOM = document.querySelector(".link-dom")
//$linkDOM.setAttribute("target", "_blank")
$linkDOM.setAttribute("rel", "noopener")
$linkDOM.setAttribute("href", "https://youtube/jonmircha")

console.log($linkDOM.hasAttribute("rel")) // true
$linkDOM.removeAttribute("rel")
console.log($linkDOM.hasAttribute("rel")) // false

//Data-Attributes
console.log($linkDOM.getAttribute("data-description"))
console.log($linkDOM.dataset) //find data-
console.log($linkDOM.dataset.description) //find data-description
$linkDOM.setAttribute("data-descriotion", "Modelo de Objeto del Documento")
console.log($linkDOM.dataset.description)
$linkDOM.dataset.description = "Suscribe :)"
console.log($linkDOM.hasAttribute("data-id"))
$linkDOM.removeAttribute("data-attribute")
*/ 

const $linkDOM = document.querySelector(".link-dom")

console.log($linkDOM.style) // CSS -, JAVASCRIPT I DONT UNDERSTAN, BETTER USE CAMEL CASE

console.log($linkDOM.getAttribute("style"))
console.log($linkDOM.style.backgroundColor) //remeber camel case
console.log($linkDOM.style.color)

console.log(window.getComputedStyle($linkDOM))
console.log(window.getComputedStyle($linkDOM).getPropertyValue("color"))

$linkDOM.style.setProperty("text-decoration", "none")
$linkDOM.style.setProperty("display", "block")

$linkDOM.style.width="50%"
$linkDOM.style.textAlign = "center"
$linkDOM.style.marginLeft="auto"
$linkDOM.style.marginRight="auto"
$linkDOM.style.padding="Trem"
$linkDOM.style.borderRadius=".5rem"

console.log($linkDOM.style)
console.log($linkDOM.getAttribute("style"))
console.log(window.getComputedStyle($linkDOM))

//CSS VARIABLES - CUSTOM PROPERTIES CSS
const $html = document.documentElement,
$body = document.body

let varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color"), varYellowColor = getComputedStyle($html).getPropertyValue("--yellow-color")

console.log(varDarkColor, varYellowColor)

$body.style.backgroundColor = varDarkColor
$body.style.color = varYellowColor

$html.style.setProperty("--dark-color", "pink")
varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color")

$body.style.setProperty("background-color", varDarkColor)
