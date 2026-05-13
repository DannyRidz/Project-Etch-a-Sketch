const container = document.querySelector('#container');
const button = document.querySelector('#button');

button.addEventListener('click', () => {
    let userInput = prompt("Enter the number of squares per side (max 100):");

    userInput = parseInt(userInput);

    if (userInput > 100 || userInput < 1 || Number.isNaN(userInput)) {
        alert("Invalid input. Please enter a number between 1 and 100.");
        return;
    }

    container.innerHTML = "";

    createGrid(userInput);
})

function createGrid(userInput) {
    let size = userInput * userInput;
    let squareWidth = 960 / userInput;
    let squareHeight = 960 / userInput;

    for (let i = 0; i < size; i++) {
        const div = document.createElement('div');
        div.style.width = `${squareWidth}px`;
        div.style.height = `${squareHeight}px`;
        div.addEventListener('mouseover', () => {
            if (!div.dataset.r) {
                div.dataset.r = Math.floor(Math.random() * 256);
                div.dataset.g = Math.floor(Math.random() * 256);
                div.dataset.b = Math.floor(Math.random() * 256);
                div.dataset.darkness = 0;
            }

            let r = parseInt(div.dataset.r);
            let g = parseInt(div.dataset.g);
            let b = parseInt(div.dataset.b);
            let darkness = parseInt(div.dataset.darkness);

            let factor = 1 - (darkness * 0.1);

            let newR = Math.floor(r * factor);
            let newG = Math.floor(g * factor);
            let newB = Math.floor(b * factor);

            div.style.backgroundColor = `rgb(${newR}, ${newG}, ${newB})`

            if (darkness < 10) {
                div.dataset.darkness = darkness + 1;
            }
        })
        container.appendChild(div);
    }
}
createGrid(16);