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
            div.style.backgroundColor = 'blue';
        })
        container.appendChild(div);
    }
}
createGrid(16);