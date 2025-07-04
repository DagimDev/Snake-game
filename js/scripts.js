const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext("2d");

console.log(ctx);

const snake = [];
snake[0] = {
  x: 0,
  y: 0,
};

console.log(snake);
const scale = 20;
const row = canvas.height / scale;
const column = canvas.width / scale;
// console.log(`Row: ${row}`)
// console.log(`Column: ${column}`)

ctx.strokeStyle = "red";
ctx.fillStyle = "#fff";
ctx.fillRect(snake[0].x, snake[0].y, 20, 20);
