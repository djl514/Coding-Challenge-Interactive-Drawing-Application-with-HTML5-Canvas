const canvas = document.getElementById('canva');
const ctx = canvas.getContext('2d');
const clearCanvas = document.getElementById('clear');
const color = document.getElementById('colorPicker');

let width = canvas.width;
let height = canvas.height;

clearCanvas.addEventListener("click", () =>{
    ctx.clearRect(0,0, width, height);
});
//clears canvas

let opacity = 1;
document.querySelector("#opacity").addEventListener("change", e=> {
    opacity = e.target.value;
});
//changes the opacity of the drawing

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


