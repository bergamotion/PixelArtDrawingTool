function createPixelGrid(n) {
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
    this.style["background-color"] = color;
}

function startDrawing() {
    one.addEventListener("mouseover", print);
    two.addEventListener("mouseover", print);
}

function stopDrawing() {
    one.removeEventListener("mouseover", print);
    two.removeEventListener("mouseover", print);

}

createPixelGrid(16);

let color = "black";
let userColor = "black";

const eraser = document.getElementById("eraser");
eraser.addEventListener("click", () => color = "white");

const colorPicker = document.getElementById("colorPicker");
colorPicker.addEventListener("change", e =>  {
    userColor = e.target.value;
    color = userColor;
});

const pencil = document.getElementById("pencil");
pencil.addEventListener("click", () => color = userColor);

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














