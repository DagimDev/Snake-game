const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext("2d");

const scale = 10;
const row = canvas.height / scale;
const column = canvas.width / scale;

// Initialize score and high score
let score = {
  s: 0,
};

let highScore = {
  s: 0,
};

const snake = [];
snake[0] = {
  x: Math.floor(Math.random() * row) * scale,
  y: Math.floor(Math.random() * column) * scale,
};

// Implement random food generation
let foods = [
  {
    a: Math.floor(Math.random() * row) * scale,
    b: Math.floor(Math.random() * column) * scale,
  },
];

// set direction for snake
let direction = "right";

let playGame = setInterval(draw, 100);

// Draw the whole snake and the food
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < snake.length; i++) {
    ctx.strokeStyle = "red";
    ctx.fillStyle = "#00ff7f";
    ctx.fillRect(snake[i].x, snake[i].y, scale, scale);
  }

  // Draw food square
  ctx.fillStyle = "#ff3838";
  ctx.fillRect(foods[0].a, foods[0].b, scale, scale);
  ctx.shadowColor = "#ff2a6d";
  ctx.shadowBlur = 15;

  // Create a variable for simplycity
  let snakeX = snake[0].x;
  let snakeY = snake[0].y;

  // Add keydown event to handle a snake movement
  document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight" && direction !== "left") direction = "right";
    else if (event.key === "ArrowUp" && direction !== "down") direction = "up";
    else if (event.key === "ArrowLeft" && direction !== "right")
      direction = "left";
    else if (event.key === "ArrowDown" && direction !== "up")
      direction = "down";
  });

  // Set a direction depend on the user intraction
  if (direction === "right") snakeX += scale;
  if (direction === "up") snakeY -= scale;
  if (direction === "left") snakeX -= scale;
  if (direction === "down") snakeY += scale;

  // Loop the snake if it reaches the maximum width and height
  if (snakeX > canvas.width) {
    snakeX = 0;
  } else if (snakeX < 0) {
    snakeX = canvas.width;
  }
  if (snakeY > canvas.height) {
    snakeY = 0;
  } else if (snakeY < 0) {
    snakeY = canvas.height;
  }

  // if the snake eats it grows through new added snake head
  let newHead = {
    x: snakeX,
    y: snakeY,
  };

  // Implement if the snake is equal to the food make it grow up
  if (snakeX === foods[0].a && snakeY === foods[0].b) {
    // Increase the score if the snake is equal to the food
    score.s++;
    foods[0] = {
      a: Math.floor(Math.random() * row) * scale,
      b: Math.floor(Math.random() * column) * scale,
    };
  } else {
    // if the snake is not equal to the food the previuos snake will be poped up
    snake.pop();
  }

  // Add the snake in the front
  snake.unshift(newHead);
}
