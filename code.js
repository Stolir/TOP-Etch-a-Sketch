canvas = document.querySelector("#canvas")

for (let i = 0; i < (16*16); i++) {
    pixel = document.createElement("div")
    pixel.classList.add("grid")
    canvas.appendChild(pixel)
}