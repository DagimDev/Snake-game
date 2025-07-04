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

let direction = "right";
let playGame = setInterval(draw, 100);

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.strokeStyle = "red";
  ctx.fillStyle = "#fff";
  ctx.fillRect(snake[0].x, snake[0].y, scale, scale);

  //   if(snake[0].x > 480)  {
  //     return
  //   }

  let snakeX = snake[0].x;
  let snakeY = snake[0].y;

  console.log(`X: ${snakeX}`);
  console.log(`Y: ${snakeY}`);

  if (direction === "right") snakeX += scale;
  if (direction === "up") snakeY -= scale;
  if (direction === "left") snakeX -= scale;
  if (direction === "down") snakeY += scale;

  console.log(`next X: ${snakeX}`);

  let newHead = {
    x: snakeX,
    y: snakeY,
  };

  //   snake.pop()
  snake.unshift(newHead);
}
