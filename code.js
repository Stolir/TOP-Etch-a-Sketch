const canvas = document.querySelector("#canvas");
const input = document.querySelector("input");
const btn = document.querySelector("button");
const canvasStyle = getComputedStyle(canvas);
let canvasSize = canvasStyle.getPropertyValue("width");
canvasSize = +(canvasSize.split("p").shift())

console.log(btn.textContent)
btn.addEventListener('click', reset);
let PixelCount = 16;

function makeGrid(pixelCount) {
    for (let i = 0; i < (PixelCount*PixelCount); i++) {
        pixelSize = canvasSize / PixelCount;
        const pixel = document.createElement("div");
        pixel.classList.add("grid");
        pixel.setAttribute("style", `width:${pixelSize}px; height:${pixelSize}px;`)
        canvas.appendChild(pixel);
    }
}


function reset() {
    console.log("click")
    while (canvas.firstChild) {
        canvas.removeChild(canvas.lastChild)
    }
    if (input.value === '') {
        makeGrid(PixelCount);
    }
    else {
        if (input.value < 16 || input.value > 100) {
            alert("Please Enter a number ranging from 16 to 100")
            makeGrid();
        }
        else {
            PixelCount = input.value;
            makeGrid(PixelCount);
        }
    }
    input.value = '';
}


makeGrid(PixelCount);
