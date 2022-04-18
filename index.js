const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

ctx.fillStyle = '#0ff';
ctx.fillRect(10, 10, 25, 25);

const circle = document.getElementById('circle');

function addCircle() {
    console.log("adding circle");
}
circle.addEventListener('click', addCircle);