const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const clearCanvas = document.getElementById('clear');
const color = document.getElementById('colorPicker');
const rectangle = document.getElementById('rect');
const circle = document.getElementById('circle');
const line = document.getElementById('line');

//Clears the canvas
clearCanvas.addEventListener("click", () =>{
    ctx.clearRect(0,0, canvas.width, canvas.height);
});

// let isDrawing = false;
// // Start drawing
// canvas.addEventListener('mousedown', () => {
// isDrawing = true;
// });

// // Stop drawing
// canvas.addEventListener('mouseup', () => {
// isDrawing = false;
// ctx.beginPath();
// });

// // Draw as the mouse moves
// canvas.addEventListener('mousemove', (event) => {
// if (!isDrawing) return;

// ctx.lineWidth = 5;
// ctx.lineCap = 'round';
// ctx.strokeStyle = color.value; // Default color, you can change this dynamically

// ctx.lineTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
// ctx.stroke();
// ctx.beginPath();
// ctx.moveTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
// });


// Variables to track if the user is drawing
let drawing = false;

// Start drawing when the mouse is pressed down
canvas.addEventListener('mousedown', (e) => {
    drawing = true;
});

// Draw as the mouse moves (only if drawing is true)
canvas.addEventListener('mousemove', (e) => {
    if (!drawing) return; // Stop if the mouse is not pressed
// Example: Draw a small dot at the current mouse position
    if(circle.checked){
        ctx.beginPath();
        ctx.arc(e.offsetX, e.offsetY, 10, 0, Math.PI * 2);
        ctx.fillStyle = color.value;
        ctx.fill();
    } else if (rectangle.checked){
        ctx.strokeStyle = color.value;
        ctx.lineWidth = 5;
        ctx.strokeRect(e.offsetX, e.offsetY, 150, 100);
    } else if (line.checked){
        ctx.lineWidth = 5;
        ctx.lineCap = 'round';
        ctx.strokeStyle = color.value; // Default color, you can change this dynamically

        ctx.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
    }
});

// Stop drawing when the mouse is released
canvas.addEventListener('mouseup', () => {
    drawing = false;
});