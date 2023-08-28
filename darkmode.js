const darkModeButton = document.getElementById('dark-mode');
const body = document.body;

darkModeButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
});