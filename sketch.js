let bird;
let pipes = [];
let bg;
var offsetx = 0;
let gameOver = false;
let point = 0;

function setup() {
  createCanvas(640, 720);
  bird = new Bird();
  pipes.push(new Pipe);

  bg = loadImage('assets/background.png')
}

function draw() {
  background(78, 192, 202);

  image(bg, offsetx, 300);
  image(bg, offsetx + 419, 300);
  image(bg, offsetx + 838, 300);
  if (!gameOver) offsetx--;
  if (offsetx <= -419) {
    offsetx = 0;
  }

  for (let i = pipes.length - 1; i >= 0; i--) {
    pipes[i].show();

    if (!gameOver) pipes[i].update();

    if (pipes[i].hit(bird)) {
      gameOver = true;
      bird.die();
    }

    if (pipes[i].passed(bird) && !gameOver) {
      point += 1;
    }

    if (pipes[i].offscreen()) {
      pipes.splice(i, 1);
    }

    if (frameCount % 75 == 0 && !gameOver) {
      pipes.push(new Pipe());
    }
  }

  if (bird.underground()) {
    bird.die();
    gameOver = true;
  }

  // Point
  textSize(32);
  fill(255, 255, 255);
  textAlign(CENTER, CENTER);
  text(point, 50, 50);

  if (gameOver) {
    text('GAME OVER', width / 2, height / 2);
    fill(250, 200, 4);
    rect(width / 2 - 50, height / 2 + 24, 100, 36, 5);
    textSize(18);
    fill(0, 0, 0);
    text('Play again', width / 2, height / 2 + 42);
  }

  bird.show();
  bird.update();
}

function reset() {
  bird = new Bird();
  pipes.length = 0;
  pipes.push(new Pipe);
  point = 0;
  gameOver = false;
  redraw();
}

function keyPressed() {
  if (key == ' ' || keyCode == UP_ARROW) {
    if (!gameOver) bird.up();
  }
  if (keyCode == ENTER) {
    if (gameOver) reset();
  }
}

function mouseClicked() {
  if ((mouseX >= width / 2 - 50) && (mouseX <= width / 2 + 50) && (mouseY >= height / 2 + 24) && (mouseY <= height / 2 + 60)) {
    if (gameOver) reset();
  }
}
