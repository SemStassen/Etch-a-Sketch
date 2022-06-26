const gridContainer = document.querySelector('.gridContainer')

for (let x = 0; x < 16; x++) {
    for (let y = 0; y < 16; y++) {
        square = document.createElement('div')
        square.classList.add('square')
        gridContainer.appendChild(square)
    }
}