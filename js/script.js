const gridContainer = document.querySelector('.gridContainer')

const resizeButton = document.querySelector('button')
resizeButton.addEventListener('click', resizeGrid)


//create starting grid when page first loads
createGrid(20);

//create square grid
function createGrid(SquaresPerSide) {

    gridContainer.style.gridTemplate = `repeat(${SquaresPerSide}, 1fr) / repeat(${SquaresPerSide}, 1fr)`


    for (let x = 0; x < SquaresPerSide; x++) {
        for (let y = 0; y < SquaresPerSide; y++) {
            squareDiv = document.createElement('div');
            squareDiv.classList.add('square');
            squareDiv.dataset.darkness = 110
            gridContainer.appendChild(squareDiv);
        }
    }

    // add eventlisteners for hover
    const squares = document.querySelectorAll('.square');

    squares.forEach(function (square) {
       square.addEventListener('mouseenter', squareHoverBackground, {once: true});
        square.addEventListener('mouseenter', squareHoverDarken);        
})
}

function resetGrid() {
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild)
    }
}

function resizeGrid() {
    let squareSize = prompt('What number of squares would you like on each side? (max 100.)')

    //check for cancel press
    if (squareSize == null) {
        return
    }

    //check if number is valid
    squareSize = numberCheck(squareSize)
    if (squareSize == 'invalid') {
        resizeGrid();
        return;
    }

    console.log(squareSize)

    //remove all existing divs from the grid
    resetGrid();

    createGrid(squareSize);
}



function numberCheck(number) {
    //check if number is valid
    if (number < 1 || number > 100 || Number.isNaN(number)) {
        return 'invalid' 
    }

    //round numbers if they're not integers
    if (!Number.isInteger(number)) {
        number = Math.round(number)
    }

    //remove leading zeroes
    number = +number
    return number;
}

//generate a random background once
function squareHoverBackground() {
        let r = Math.floor(Math.random() * 255);
        let g = Math.floor(Math.random() * 255);
        let b = Math.floor(Math.random() * 255);
        this.style.background = `rgb(${r}, ${g}, ${b})`;      
}


function squareHoverDarken() {
    amountOfDark = this.dataset.darkness;
    if (amountOfDark > 0) {
    amountOfDark -= 10;
    this.style.filter = `brightness(${amountOfDark}%)`
    this.dataset.darkness = amountOfDark;
    }
}