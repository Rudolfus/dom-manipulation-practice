console.log("hello world")

// manipulating the DOM with the JS file
const mainTitle = document.getElementById("main-title")
mainTitle.innerHTML = "Remote Racoons"
    // this returns a node (a reference to the HTML file)
    // with this element we can change / interact

// by class name
const infoCollection = document.getElementsByClassName("info")
// console.log(infoCollection)

let infoElementArray = [...infoCollection]; // convert html collection to an array
// this method doesn't return an array but a HTML-collection
    // this needs to be converted to an array to work with it
    infoElementArray.forEach(elm => {elm.style.color = "blue"});

//get elements by tag name
const allParagraphsHtmlCollection = document.getElementsByTagName("p");

// by css selector 

// returns only the first occurence matching this css selector
const first = document.querySelector("header h2")

// returns all the occurences matching this css selector
const all = document.querySelectorAll("header h2")

first.style.color = "green"

// iterate through "all" & change the color to orange

// all.forEach( elm => elm.style.color = "orange")
all.forEach( elm => elm.style.color = "orange")
// for (let i=0; i < all.length; i++){
//     all[i].style.color = "red"
// }

const btn = document.getElementById("button-1");

btn.addEventListener("click", (e) => {
    console.log("user has clicked on a button");   

    //append paragraph
    const newP =  document.createElement("p");
    newP.innerText = "this p has been created dynamically";
    parentElm.appendChild(newP);
})

document.addEventListener('keydown', (e) => {
    if (e.code === "Space") {
        console.log("user pressed spacebar")
    } else {
        console.log("user pressed other key....")
    }
});

const allBtn = document.querySelectorAll(".btn");

allBtn.forEach((elm) => {
    elm.addEventListener("click", (e) => {
        console.log("the user has clicked any button")
    })
});
