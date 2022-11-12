function createPixelGrid(n) {
    const gridContainer = document.getElementById("container");
    gridContainer.style["grid-template-columns"] = `repeat(${n}, auto)`;
    const gridElement = document.createElement("div");
    gridElement.classList.add("element");
    for (let i = 0; i < n**2; i++) {
        gridContainer.appendChild(gridElement.cloneNode());
    }
}

createPixelGrid(16);

