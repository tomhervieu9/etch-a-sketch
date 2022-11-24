function createGrid() {
    const container = document.querySelector('.container');

    const numSquares = prompt('How many squares would you like on each side?', 4);

    container.style.gridTemplateColumns = `repeat(${numSquares}, 1fr)`;

    for (let i = 0; i < numSquares**2; i++) {
        const div = document.createElement('div');
        div.classList.add('square');
        div.addEventListener('mouseover', (e) => div.classList.add('hover'), false);
        div.addEventListener('mouseout', (e) => {div.classList.remove('hover')}, false);
        container.appendChild(div);
    }

}

createGrid();