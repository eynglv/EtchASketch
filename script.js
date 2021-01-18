let container = document.querySelector(".grid-container");
let buttons = document.querySelector(".buttons");
let defaultGridSize = 16;
let dustyPink = "rgb(171, 138, 138)";
let gray = "rgb(92, 92, 92)";


function createGrid(gridSize) {
    for (let i = 0; i < gridSize ** 2; i++) {
        let div = document.createElement('div');
        div.classList.add("grid-item");
        div.addEventListener('mouseover', changeColor);
        container.appendChild(div);
    }
}
function changeColor(e) {
    e.target.style.backgroundColor = dustyPink;
}

function setGridSize(size) {
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
}

function setDefaultGrid() {
    setGridSize(defaultGridSize);
    createGrid(defaultGridSize);
}

document.getElementById("clear").addEventListener("click", clearScreen);
function clearScreen() {
    container.innerHTML = "";
    if (!gridSize){
        gridSize = defaultGridSize;
    }
    setGridSize(gridSize); //change later
    createGrid(gridSize);  //change later
}

let gridSize; 
document.getElementById("change").addEventListener("click", changeGridSize);
function changeGridSize() {
    gridSize = prompt("Choose a grid size of less than 100.");
    if (gridSize>100){
        gridSize = 100;
    }
    clearScreen(gridSize);
}

document.getElementById("erase").addEventListener("click", erase);
function erase(e){
    let divs = document.querySelectorAll('.grid-item');
    for (div of divs){
        div.addEventListener('mouseover', function(e){
                e.target.style.backgroundColor = gray;
        });
    }
}

document.getElementById("draw").addEventListener("click", changeColorAgain);
function changeColorAgain(e){
    let divs = document.querySelectorAll('.grid-item');
    for (div of divs){
        div.addEventListener('mouseover', function(e){
                e.target.style.backgroundColor = dustyPink;
        });
    }
}


setDefaultGrid();