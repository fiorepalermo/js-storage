console.log("js caricato");

let visits = localStorage.getItem('pageVisits') || 0;
visits = Number(visits) + 1;
localStorage.setItem('pageVisits', visits);

const counterDisplay = document.createElement('p');
counterDisplay.textContent = `Hai visitato questa pagina ${visits} volte.`;

document.querySelector('body').appendChild(counterDisplay);