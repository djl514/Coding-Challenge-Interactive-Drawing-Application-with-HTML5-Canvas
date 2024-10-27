const canvas = document.getElementById('canva');
const ctx = canvas.getContext('2d');
const clearCanvas = document.getElementById('clear');
const color = document.getElementById('colorPicker');
const rectangle = document.getElementById('rect');
const circle = document.getElementById('circle');
const line = document.getElementById('line');


let width = canvas.width;
let height = canvas.height;

//Clears the canvas
clearCanvas.addEventListener("click", () =>{
    ctx.clearRect(0,0, width, height);
});

let isDrawing = false;

// Start drawing when the mouse is down
canvas.addEventListener('mousedown', () => {
isDrawing = true;
});

// Stop drawing when the mouse is up
canvas.addEventListener('mouseup', () => {
isDrawing = false;
ctx.beginPath(); // Reset the path after lifting the mouse
});

// Draw as the mouse moves
canvas.addEventListener('mousemove', (event) => {
if (!isDrawing) return; // Exit if not drawing

ctx.lineWidth = 5;
ctx.lineCap = 'round';
ctx.strokeStyle = color.value; // Default color, you can change this dynamically

ctx.lineTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
});


