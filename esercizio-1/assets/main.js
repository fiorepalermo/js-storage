console.log("js caricato");


const input = document.querySelector('#usernameInput');
const button = document.querySelector('#saveBtn');
const message = document.querySelector('#welcomeMessage');

const savedName = localStorage.getItem('username');

if (savedName) {
    message.textContent = `Bentornato, ${savedName}!`;
}

button.addEventListener('click', () => {
    const name = input.value;
    if (name) {
        localStorage.setItem('username', name);
        message.textContent = `Bentornato, ${name}!`;
    }
});
