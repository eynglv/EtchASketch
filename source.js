let container = document.querySelector('.grid-container');
let buttons = document.querySelector('.buttons');
let gridSize = 16;

function setDefaultGrid() {
    setGridSize(gridSize);
    createGrid();
  }

function clearScreen(gridSize) {
    container.innerHTML = "";
    setDefaultGrid(gridSize);
}

buttons.addEventListener('click', clearScreen());

function setGridSize(size) {
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  }

function createGrid() {
    for (let i = 0; i < gridSize**2; i++) {
        let div = document.createElement('div');
        div.classList.add("grid-item");
        div.addEventListener('mouseover', changeColor);
        container.appendChild(div);
    }
}

function changeColor(e){
    e.target.style.backgroundColor = "rgb(171, 138, 138)";
}

function changeGridSize(e){
    gridSize = prompt("Please choose a grid size less than 100.")
    if (gridSize>100){
        gridSize = 100;
    }
    clearScreen(gridSize);
}