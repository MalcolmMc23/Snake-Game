// Malcolm McDonald
// 1129
//snake one phase

let snake, food;
let cols, rows;
let cellSize;
let score = 0;
let gameState = 1;
let buttPlay, buttInst, buttAgain;
let imgApple, imgGrass;

function preload() {
  imgApple = loadImage('apple.png');
  imgGrass = loadImage('grass2.jpg');
}


function setup() {
  var cnv = createCanvas(800, 600);
  cnv.position((windowWidth - width) / 2, 30);
  frameRate(9);
  initGame();

}
function draw() {

  if (gameState === 1) {
    sGame();
  } else if (gameState === 2) {
    pGame();
  } else if (gameState === 3) {
    eGame();
  }
}

function sGame() {
  // background(150);
  image(imgGrass, 0, 0, 800, 600);
  buttPlay.run()

}

function pGame() {
  // background(20);
  image(imgGrass, 0, 0, 800, 600);
  snake.run();
  food.run();

  fill(20);
  stroke(50)
  text('SCORE = ' + score, 100, 50);
}

function eGame() {
  //++++++++++++++++++++++++++++++++ background image
  // background(255, 0, 0);
  image(imgGrass, 0, 0, 800, 600);
  //+++++++++++++++++++++++++++++++++ end of backgound image
  //+++++++++++++++++++++++++++++++ button
  buttAgain.run();
  //+++++++++++++++++++++++++++++++ end of button
  //+++++++++++++++++++++++++++++ text
  fill(20);
  stroke(50);
  textSize(80)
  text('NICE TRY!', 225, 250)
  //+++++++++++++++++++++++++++++ end of text

}


function keyPressed() {
  if (gameState === 2) {
    if (keyCode == DOWN_ARROW) {
      snake.vel = createVector(0, 1 * cellSize);
    }


    if (keyCode == UP_ARROW) {
      snake.vel = createVector(0, -1 * cellSize);
    }

    if (keyCode == LEFT_ARROW) {
      snake.vel = createVector(-1 * cellSize, 0);
    }

    if (keyCode == RIGHT_ARROW) {
      snake.vel = createVector(1 * cellSize, 0);
    }
  }
  // =========================================== WASD
  if (keyCode == 87) {
    snake.vel = createVector(0, -1 * cellSize)
  }

  if (keyCode == 65) {
    snake.vel = createVector(-1 * cellSize, 0)
  }

  if (keyCode == 83) {
    snake.vel = createVector(0, 1 * cellSize)
  }

  if (keyCode == 68) {
    snake.vel = createVector(1 * cellSize, 0)
  }


}



function mouseMoved() {
  if (buttPlay.mouseOverButton()) {
    buttPlay.clrButton = color(100, 255, 200);
  } else {
    buttPlay.clrButton = color(255, 100, 0);
  }

  if (buttPlay.mouseOverButton()) {
    buttAgain.clrButton = color(100, 255, 200);
  } else {
    buttAgain.clrButton = color(255, 100, 0);
  }
}



function mousePressed() {
  if (buttPlay.mouseOverButton()) {
    gameState = 2;
  }
  if (buttAgain.mouseOverButton()) {
    // gameState = 1;
    initGame()
  }
}


function initGame() {
background(20)
  //++++++++++++++++ start buttons
  // buttPlay = new Button(msg, mX, mY, x, y, w, h);
  buttPlay = new Button("Start", width / 2, height / 2 - 40, width / 2 - 100, height / 2 - 100, 250, 100);
  //&&&&&&&&&&&&&&&&&&&&&&&&&&& add instructions
  buttAgain = new Button("restart", 550, 550, 500, 500, 200, 99);
  //++++++++++++++++end buttons

  //++++++++++++++++++ gameState 2 stuff
  cellSize = 20;
  cols = width / cellSize;
  rows = height / cellSize;
  let x = floor(random(cols)) * cellSize;
  let y = floor(random(rows)) * cellSize;
  let loc = createVector(x, y);
  snake = new Snake(loc, createVector(cellSize, 0));
  food = new Food(x, y);
  //+++++++++++++ gameState 2 stuff end
  gameState = 1;
}
