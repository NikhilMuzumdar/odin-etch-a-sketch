gameMode = 'classic'
defaultGridColor = 'white'

// Color variables
function updateGrid(n) {
    var grid = document.getElementById("grid");
    for (var i = 0; i < n * n; i++) {
        var gridItem = document.createElement("div");
        gridItem.classList.add("grid-item");
        gridItem.style.backgroundColor = defaultGridColor;
        grid.appendChild(gridItem);
    }
    gridSize = `Grid Size: ${n}x${n}`
    gridText = document.querySelector('.controls p');
    gridText.innerHTML = gridSize;
    grid.style.cssText = `grid-template-columns: repeat(${n}, 1fr); grid-template-rows: repeat(${n}, 1fr);`;
}

// add hover state
function addHoverstate() {
    const grids = document.querySelectorAll('.grid-item')
    grids.forEach((grid) => {
        grid.addEventListener('mouseover', () => {
            grid.style.backgroundColor = color(gameMode);
        })
    })
}

// remove hover state
function removeHoverstate() {
    const grids = document.querySelectorAll('.grid-item')
    grids.forEach((grid) => {
        grid.style.backgroundColor = defaultGridColor;
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

// color function
function color (mode) {
    if (mode === 'classic') {
        return 'black'
    }
    if (mode === 'eraser') {
        console.log(defaultGridColor)
        return defaultGridColor
    }
    const colorPallet = ['#EF476F', '#FFD126', '#06D6A0', '#118AB2', '#073B4C'];
    return colorPallet[Math.floor(Math.random() * colorPallet.length)];
}

//Toggle Game modes
const classicMode = document.querySelector('.classic-mode')
classicMode.addEventListener('click', ()=>{
    gameMode = 'classic'
})

const rgbMode = document.querySelector('.rgb-mode')
rgbMode.addEventListener('click', ()=>{
    gameMode = 'rgb'
})

const eraseMode = document.querySelector('.erase-mode')
eraseMode.addEventListener('click', ()=>{
    gameMode = 'eraser'
})

// main
updateGrid(10);
addHoverstate();
const grid = document.querySelector('.grid');
grid.style.backgroundColor = defaultGridColor;


