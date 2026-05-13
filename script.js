const container = document.querySelector('#container');

for (let i = 0; i < 256; i++) {
    const div = document.createElement('div');
    div.addEventListener('mouseover', () => {
        div.style.backgroundColor = 'blue';
    })
    container.appendChild(div);
}