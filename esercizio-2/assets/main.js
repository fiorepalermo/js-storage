console.log("js caricato");

const isFirstVisit = localStorage.getItem('hasVisited');
const welcomeElement = document.createElement('h1');

if (!isFirstVisit) {
    welcomeElement.textContent = "Benvenuto per la prima volta sul nostro sito!";
    localStorage.setItem('hasVisited', 'true');
} else {
    welcomeElement.textContent = "Bentornato a bordo!";
}

document.querySelector('body').appendChild(welcomeElement);