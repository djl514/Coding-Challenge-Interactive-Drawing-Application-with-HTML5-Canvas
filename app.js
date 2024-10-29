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

// Variables to track if the user is drawing
let isDrawing = false;

// Start isDrawing when the mouse is pressed down
canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
});

// Draw as the mouse moves (only if isDrawing is true)
canvas.addEventListener('mousemove', (e) => {
    if (!isDrawing){
        return; // Stop if the mouse is not pressed
    } else if(circle.checked){
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

// Stop isDrawing when the mouse is released
canvas.addEventListener('mouseup', () => {
    isDrawing = false;
});