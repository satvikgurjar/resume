const canvas = document.getElementById('candlestickCanvas');
const ctx = canvas.getContext('2d');

// Set canvas size
canvas.width = 300;
canvas.height = 300;

// Smiley face candlestick pattern data
const smileyData = [
    { x: 75, y: 150, width: 50, height: 100 }, // left eye
    { x: 175, y: 150, width: 50, height: 100 }, // right eye
    { x: 75, y: 120, width: 150, height: 20 }, // mouth
];

function drawSmiley() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#000';
    
    // Draw eyes
    ctx.fillRect(smileyData[0].x, smileyData[0].y, smileyData[0].width, smileyData[0].height);
    ctx.fillRect(smileyData[1].x, smileyData[1].y, smileyData[1].width, smileyData[1].height);

    // Draw mouth
    ctx.fillRect(smileyData[2].x, smileyData[2].y, smileyData[2].width, smileyData[2].height);
}

function animate() {
    drawSmiley();
    requestAnimationFrame(animate);
}

animate();
