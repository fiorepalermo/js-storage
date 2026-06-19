console.log("js caricato");

const langSelect = document.querySelector('#langSelect');
const savedLang = localStorage.getItem('userLanguage') || 'it';

langSelect.value = savedLang;

langSelect.addEventListener('change', (event) => {
    const selectedLanguage = event.target.value;
    localStorage.setItem('userLanguage', selectedLanguage);
    alert(`Lingua cambiata in: ${selectedLanguage}.`);
});