// Malcolm McDonald
// 1129
//snake one phase

let snake
let food
let cols, rows;
let cellSize
let score = 0
let gameState = 1
let buttPlay, buttInst, buttAgain;


function setup() {
 var cnv = createCanvas(800, 600);
 cnv.position((windowWidth - width) / 2, 30);
 frameRate(9);
 iDontKnow();

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
 background(150)
 buttPlay.run()

}

function pGame() {
 background(20)
 snake.run();
 food.run();
 text('SCORE = ' + score, 100, 50)
}

function eGame() {
  background(255,0,0)
  buttAgain.run();
}


function keyPressed() {
  if(gameState === 2) {
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
   gameState = 1;
 }
}


function iDontKnow() {
  cellSize = 20;
  //++++++++++++++++ start buttons
  if (gameState === 1) {
    // buttPlay = new Button(msg, x, y, w, h);
    buttPlay = new Button("Start", 0, 500, 200, 99);
    //&&&&&&&&&&&&&&&&&&&&&&&&&&& add instructions
    buttAgain = new Button("restart", 500 ,500, 200, 99);

    //++++++++++++++++end buttons

  }

  //++++++++++++++++++ gameState 2 stuff
  cols = width / cellSize;
  rows = height / cellSize;
  let x = floor(random(cols)) * cellSize;
  let y = floor(random(rows)) * cellSize;
  let loc = createVector(x, y);
  snake = new Snake(loc, createVector(cellSize, 0));
  food = new Food(x, y);
  //+++++++++++++ gameState 2 stuff end
}


