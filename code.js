const canvas = document.querySelector("#canvas")
const input = document.querySelector("input")
const btn = document.querySelector("button")
let size = 16



function makeGrid(size) {
    for (let i = 0; i < (size*size); i++) {
        pixel = document.createElement("div")
        pixel.classList.add("grid")
        canvas.appendChild(pixel)
    }
}

makeGrid(size)