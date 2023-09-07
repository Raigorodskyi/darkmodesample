const darkModeButton = document.getElementById('dark-mode');
const body = document.body;
const wid1 = document.getElementById('widget1');

darkModeButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    wid1.classList.toggle('dark-mode');
});


// Add a click event listener to the button
var button = document.getElementById('imageButton');
button.addEventListener('click', changeImage);

function changeImage() {
    var img = document.getElementById('lightImage');
    if (img.src.match("img/lightOff.png")) {
        img.src = "img/lightOn.png";
        img.alt = 'Light On';
    } else {
        img.src = "img/lightOff.png";
        img.alt = 'Light Off';
    }
}