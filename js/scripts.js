const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext("2d");

// console.log(ctx);

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

// console.log(snake[0].x);
// console.log(snake[0].y);

let foods = [
  {
    a: Math.floor(Math.random() * row) * scale,
    b: Math.floor(Math.random() * column) * scale,
  },
];

let direction = "right";
let playGame = setInterval(draw, 100);

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < snake.length; i++) {
    ctx.strokeStyle = "red";
    ctx.fillStyle = "#fff";
    ctx.fillRect(snake[i].x, snake[i].y, scale, scale);
    ctx.strokeRect(snake[i].x, snake[i].y, scale, scale);
  }

  // Draw food square
  ctx.fillStyle = "yellow";
  ctx.fillRect(foods[0].a, foods[0].b, scale, scale);

  //   if(snake[0].x > 480)  {
  //     return
  //   }

  let snakeX = snake[0].x;
  let snakeY = snake[0].y;

  // console.log(`X: ${snakeX}`);
  // console.log(`Y: ${snakeY}`);

  if (direction === "right") snakeX += scale;
  if (direction === "up") snakeY -= scale;
  if (direction === "left") snakeX -= scale;
  if (direction === "down") snakeY += scale;

  // console.log(`next X: ${snakeX}`);
  if (snakeX > canvas.width) {
    snakeX = 0;
    // console.log(true)
  } else if (snakeX < 0) {
    snakeX = canvas.width;
  }
  if (snakeY > canvas.height) {
    snakeY = 0;
    // console.log("Yes for y")
  } else if (snakeY < 0) {
    snakeY = canvas.height;
  }

  let newHead = {
    x: snakeX,
    y: snakeY,
  };

  snake.pop();
  snake.unshift(newHead);
}
