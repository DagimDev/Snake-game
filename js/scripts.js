const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext("2d");

console.log(ctx);

const scale = 10;
const row = canvas.height / scale;
const column = canvas.width / scale;
// console.log(`Row: ${row}`)
// console.log(`Column: ${column}`)

const snake = [];
snake[0] = {
  x: Math.floor(Math.random() * row) * scale,
  y: Math.floor(Math.random() * column) * scale,
};

console.log(snake[0].x);
console.log(snake[0].y);

ctx.strokeStyle = "red";
ctx.fillStyle = "#fff";
ctx.fillRect(snake[0].x, snake[0].y, scale, scale);
