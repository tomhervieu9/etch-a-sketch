const container = document.querySelector('.container');
const button = document.querySelector('button');
button.addEventListener('click', changeDimension, false);
changeDimension();

function changeDimension() {
    let numSquares = prompt('How many squares would you like on each side? (Max: 100)');

    container.style.gridTemplateColumns = `repeat(${numSquares}, 1fr)`;

    removeAllChildNodes();

    for (let i = 0; i < numSquares**2; i++) {
        const div = document.createElement('div');
        div.classList.add('square');
        div.addEventListener('mouseover', (e) => div.classList.add('hover'), false);
        div.addEventListener('mouseout', (e) => {div.classList.remove('hover')}, false);
        container.appendChild(div);
    }
}

function removeAllChildNodes() {
    while(container.firstChild) {
        container.removeChild(container.firstChild);
    }
}
