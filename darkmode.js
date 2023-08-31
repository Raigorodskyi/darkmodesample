const darkModeButton = document.getElementById('dark-mode');
const body = document.body;
const wid1 = document.getElementById('widget1');

darkModeButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    wid1.classList.toggle('dark-mode');
});