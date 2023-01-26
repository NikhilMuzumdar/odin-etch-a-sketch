var gamemode = 'classic'

// Toggle game mode classic to rgb
function colorMode () {
    const mode = document.querySelector('.game-mode')
    console.log(mode)
}


// Color variables
function updateGrid(n = 4) {
    var grid = document.getElementById("grid");
    for (var i = 0; i < n * n; i++) {
        var gridItem = document.createElement("div");
        gridItem.classList.add("grid-item");
        grid.appendChild(gridItem);
    }
    grid.style.cssText = `grid-template-columns: repeat(${n}, 1fr); grid-template-rows: repeat(${n}, 1fr);`;
}

// add hover state
function addHoverstate() {
    const grids = document.querySelectorAll('.grid-item')
    grids.forEach((grid) => {
        grid.addEventListener('mouseover', () => {
            grid.style.backgroundColor = 'grey';
        })
    })
}

// remove hover state
function removeHoverstate() {
    const grids = document.querySelectorAll('.grid-item')
    grids.forEach((grid) => {
        grid.style.backgroundColor = 'lightcyan';
    })
}

// resize grid
function resizeGrid() {
    var n = prompt()
    n = Number(n)
    if (n <= 100) {
        return n;
    }
    alert('Max value 100!')
    return 0;
}


// add functionality to resize button
const resize = document.querySelector('.resize')
resize.addEventListener('click', () => {
    var action = resizeGrid()
    if (action != 0) {
        n = action
        removeHoverstate()
        updateGrid(action);
        addHoverstate();
    }
})

function refreshPage() {
    window.location.reload();
}

// main

updateGrid(10);
addHoverstate();
