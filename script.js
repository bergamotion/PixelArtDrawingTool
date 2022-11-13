function cleanGrid() {
    const gridContainer = document.getElementById("container");
    const cells = document.getElementsByClassName("element");
    Array.from(cells).forEach(cell => gridContainer.removeChild(cell));
}

function createPixelGrid(n) {
    if (document.querySelector(".element")) {
        cleanGrid();
    }
    const gridContainer = document.getElementById("container");
    gridContainer.style["grid-template-columns"] = `repeat(${n}, auto)`;
    const gridElement = document.createElement("div");
    gridElement.classList.add("element");
    gridElement.classList.add("noselect");
    gridElement.setAttribute("draggable", "false");

    for (let i = 0; i < n**2; i++) {
        let cell = gridElement.cloneNode();
        cell.addEventListener("mousedown", changeColor);
        gridContainer.appendChild(cell);
    }
}

function changeColor() {
    if (rainbowMode) {
        this.style["background-color"] = `hsl(${color}, 100%, 50%)`;
        color = (color + 10) % 360;
    } else {
        this.style["background-color"] = color;
    }
}

function toggleButtonStyle() {
    for (let btn of controlButtons) {
        if (btn.classList.contains("activeButton")) {
            btn.classList.toggle("activeButton");
        }
    }
}

createPixelGrid(16);

// Global color variables
let color = "black";
let userColor = "black";
let rainbowMode = false;

// Eraser Button 
const eraser = document.getElementById("eraser");
eraser.addEventListener("click", () => {
    rainbowMode = false;
    color = "white";
    toggleButtonStyle();
    eraser.classList.toggle("activeButton");
});
 
// Color Picker
const colorPicker = document.getElementById("colorPicker");
colorPicker.addEventListener("change", e =>  {
    rainbowMode = false;
    userColor = e.target.value;
    color = userColor;
    toggleButtonStyle();
    pencil.classList.toggle("activeButton");
});

// Pencil Button
const pencil = document.getElementById("pencil");
pencil.addEventListener("click", () => {
    rainbowMode = false;
    color = userColor;
    toggleButtonStyle();
    pencil.classList.toggle("activeButton");
});

// Rainbow mode Button
const rainbow = document.getElementById("rainbow");
rainbow.addEventListener("click", () => {
    toggleButtonStyle();
    rainbow.classList.toggle("activeButton");
    rainbowMode = true;
    color = 0;
});

// Global buttons variables
const controlButtons = [eraser, pencil, rainbow];
let activeButton = pencil;

// Grid Size Slider
const slider = document.getElementById("gridSlider");
const gridSizeNumbers = document.getElementsByClassName("gridCells");
slider.addEventListener("input", function(e) {
    let val = e.target.value;
    Array.from(gridSizeNumbers).forEach(num => num.textContent = val);
});
slider.addEventListener("change", e => createPixelGrid(e.target.value));

// Drawing Logic
const cells = document.getElementsByClassName("element");
window.addEventListener("mousedown", function() {
    Array.from(cells).forEach(cell => {
        cell.addEventListener("mouseover", changeColor);
    });
});
window.addEventListener("mouseup", function() {
    Array.from(cells).forEach(cell => {
        cell.removeEventListener("mouseover", changeColor);
    });
});














