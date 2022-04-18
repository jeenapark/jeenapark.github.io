const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

ctx.fillStyle = '#0ff';

function getRandomColor() {
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    return '#' + randomColor;
}

function getRandomPosition(minX, maxX, minY, maxY) {
    minX = Math.ceil(minX);
    maxX = Math.floor(maxX);
    minY = Math.ceil(minY);
    maxY = Math.floor(maxY);
    const randX = Math.floor(Math.random() * (maxX - minX) + minX);
    const randY = Math.floor(Math.random() * (maxY - minY) + minY);
    return [randX, randY];
}

const circle = document.getElementById('circle');

function addCircle() {
    ctx.fillStyle = getRandomColor();
    ctx.beginPath();
    ctx.arc(75, 75, 30, 0, Math.PI * 2, true); // Outer circle
    ctx.fill()
    ctx.moveTo(95, 75);
    ctx.arc(75, 75, 20, 0, Math.PI, false);  // Mouth (clockwise)
    ctx.moveTo(65, 65);
    ctx.arc(60, 65, 5, 0, Math.PI * 2, true);  // Left eye
    ctx.moveTo(95, 65);
    ctx.arc(90, 65, 5, 0, Math.PI * 2, true);  // Right eye
    ctx.stroke();
}
circle.addEventListener('click', addCircle);

const square = document.getElementById('square');

function addSquare(x, y) {
    ctx.fillStyle = getRandomColor();
    const randomPosition = getRandomPosition(0, 1425, 0, 590);
    ctx.fillRect(randomPosition[0], randomPosition[1], 25, 25);
}

square.addEventListener('click', addSquare);

const triangle = document.querySelector('.triangleplus');

function addTriangle() {
    ctx.fillStyle = getRandomColor();
    ctx.beginPath();
    ctx.moveTo(50, 20);
    ctx.lineTo(30, 55);
    ctx.lineTo(70, 55);
    ctx.fill();
    console.log('hi');
}
triangle.addEventListener('click', addTriangle);