function createGrid() {
    const container = document.querySelector('body div');

    for (let i = 0; i < 15; i++) {
        const div = document.createElement('div');
        div.classList.add('square');
        container.appendChild(div);
    }
}

createGrid();