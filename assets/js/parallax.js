"use strict"

const firstImage = document.getElementById("first-image")
const lastImage = document.getElementById("last-image")
const title = document.getElementById("title")

window.addEventListener("scroll", function() {
    const scrollValue = window.scrollY

    firstImage.style.top = scrollValue * 0.7 + "px" 
    lastImage.style.bottom = scrollValue * 0.5 + "px" 
    title.style.top = scrollValue * 1 + "px" 
})