const gridContainer = document.querySelector('.gridContainer')

const resizeButton = document.querySelector('button')
resizeButton.addEventListener('click', resizeGrid)


//create starting grid
createGrid(20);

//creating square grid
function createGrid(size) {
    for (let x = 0; x < size; x++) {
        for (let y = 0; y < size; y++) {
            squareDiv = document.createElement('div');
            squareDiv.classList.add('square');
            gridContainer.appendChild(squareDiv);
        }
    }

    // hover effect on squares
    const squares = document.querySelectorAll('.square');

    squares.forEach(function (square) {
        square.addEventListener('mouseenter', squareHover);
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

function squareHover() {
    this.style.backgroundColor = '#ff5566';
}