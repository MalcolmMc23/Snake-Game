// Malcolm McDonald
// 1129
//snake one phase

let snake, food;
let cols, rows;
let cellSize;
let score = 0;
let gameState = 1;
let buttPlay, buttInst, buttAgain;
let imgApple, imgGrass, imgFace;
let eatSound;
let showInst;

function preload() {
  imgApple = loadImage('apple.png');
  imgGrass = loadImage('grass2.jpg');
  // imgFace = loadImage('face.png') $$$$$ snake head image

  //soundFormat('mp3', 'ogg');
  // eatSound = loadSound('eat.mp3');



}


function setup() {
  var cnv = createCanvas(800, 600);
  cnv.position((windowWidth - width) / 2, 30);
  // /console.log(eatSound);
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
  buttInst.run();
  if(showInst) {
    rect(1 ,76, 200, 100)
    fill(20)
    textSize(20)
    text('eat the food', 5, 95);
    text('* dont hit anything', 5, 125);
    text('* move with W A S D', 5, 150);
  }
}

function pGame() {
  // background(20);
  image(imgGrass, 0, 0, 800, 600);
  snake.run();
  food.run();
  textSize(30);
  fill(20);
  stroke(50);
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

  textSize(30)
  fill(20);
  stroke(50)
  text('SCORE = ' + score, 100, 50);
  //+++++++++++++++++++++++++++++ end of text

}


function keyPressed() {
  //==================== spacebare restart and start
  if(gameState === 1) { //start game
    if(keyCode === 32) {
      gameState = 2
    }
  }
if (gameState === 3) { // restart game
  if(keyCode === 32) {
    initGame()
  }
} 
 //==================== end of spacebare restart and start

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

  if (buttInst.mouseOverButton()) {
    buttInst.clrButton = color(100, 255, 200);
  } else {
    buttInst.clrButton = color(255, 100, 0);
  }

}


function mousePressed() {
  if (buttPlay.mouseOverButton()) {
    gameState = 2;
  }
  if (buttAgain.mouseOverButton()) {
    initGame()
  }
  if(buttInst.mouseOverButton()) {
    showInst = !showInst
  }
  
}


function initGame() {
background(20)
  //++++++++++++++++ start buttons
  // buttPlay = new Button(msg, mX, mY, x, y, w, h);
  buttPlay = new Button("Start", width / 2, height / 2 - 40, width / 2 - 100, height / 2 - 100, 250, 100);
  buttInst = new Button("Instructions", 20, 45, 1, 1, 200, 75);
  buttAgain = new Button("restart", 550, 550, 500, 500, 200, 99);
  //++++++++++++++++end buttons

  //++++++++++++++++++ gameState 2 stuff
  cellSize = 20;
  cols = width / cellSize;
  rows = height / cellSize;
  let x = floor(random(cols)) * cellSize;
  let y = floor(random(rows)) * cellSize;
  let loc = createVector(width/2, height/2);
  // snake = new Snake(loc, createVector(cellSize, 0));  &&& old
  snake = new Snake(loc); //&&& new

  food = new Food(x, y);
  //+++++++++++++ gameState 2 stuff end
  gameState = 1;
  score = 0
}
