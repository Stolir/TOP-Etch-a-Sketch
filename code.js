const canvas = document.querySelector("#canvas");
const canvasStyle = getComputedStyle(canvas);
let canvasSize = canvasStyle.getPropertyValue("width");
canvasSize = +(canvasSize.split("p").shift())

const input = document.querySelector("input");

const btn = document.querySelector("button");
btn.addEventListener('click', reset);


let PixelCount = 16;

function makeGrid(pixelCount) {
    for (let i = 0; i < (PixelCount*PixelCount); i++) {
        pixelSize = canvasSize / PixelCount;
        const pixel = document.createElement("div");
        pixel.classList.add("grid");
        pixel.setAttribute("style", `width:${pixelSize}px; height:${pixelSize}px;`)
        const pixelStyle = getComputedStyle(pixel)
        pixel.addEventListener('mouseover', function (e) {
            let pixelOpacity = pixelStyle.backgroundColor;
            pixelOpacity = +(pixelOpacity.split(",").pop()).split(")").shift();
            if (pixelOpacity < 1) {
                pixel.style.backgroundColor = `rgba(58, 58, 58, ${pixelOpacity + 0.1})`
            } 
        })
        canvas.appendChild(pixel);
    }
}


function reset() {
    while (canvas.firstChild) {
        canvas.removeChild(canvas.lastChild)
    }
    if (input.value === '') {
        makeGrid(PixelCount);
    }
    else {
        if (input.value < 16 || input.value > 64) {
            alert("Please Enter a number ranging from 16 to 64")
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
