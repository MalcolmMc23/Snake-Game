// Malcolm McDonald
// 1129
//snake one phase

let snake, food;
let cols, rows;
let cellSize;
let score = 0;
let gameState = 1;
let buttPlay, buttInst, buttAgain, buttApple, buttAplle2;
let imgApple, imgApple2, imgGrass, imgFace, imgSnake, snakeM;
let eatSound;
let showInst, showMenu;
let appleState = 1

function preload() {
  imgApple = loadImage('apple.png');
  imgGrass = loadImage('grass2.jpg');
  imgFace = loadImage('face.png') //$$$$$ snake head image
  imgApple2 = loadImage('apple2.png');
  imgSnake = loadImage('imgSnake.gif');
  // snakeM = loadImage('snakeM.gif');

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
  // image(snakeM, mouseX, mouseY, 61, 56);

  // console.log(appleState)
}

function sGame() {
  // background(150);
  if(showMenu) {
    menu();
  } else {
  image(imgGrass, 0, 0, 800, 600);
  image(imgSnake, 100, 100, 200, 200)
  buttPlay.run()
  buttInst.run();
  buttApple.run()
  buttApple2.run();
  if(showInst) {
    rect(1 ,76, 200, 100)
    fill(20)
    textSize(20)
    text('* eat the food', 5, 95);
    text('* dont hit anything', 5, 125);
    text('* move with W A S D', 5, 150);
  }
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
  if(showMenu) {
   menu();
  }
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

function menu() {
  fill(0, 125, 255);
  rect(400, 100, 200,200)

  //$$$$$$$$$$$$$$$$$$$$$$$$ add settings

}

function keyPressed() {
  // console.log(keyCode);
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

//===================== apple switch
if(keyCode === 49) {
  appleState = 1
}
if(keyCode === 50) {
  appleState = 2
}//===================== end of apple switch


//===================== contoroles
 if(keyCode === 27) {
    showMenu = !showMenu
    snake.vel = createVector( 0, 0);
 }

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
  if (buttApple.mouseOverButton()) {
    buttApple.clrButton = color(100, 255, 200);
  } else {
    buttApple.clrButton = color(255, 100, 0);
  }

  if (buttApple2.mouseOverButton()) {
    buttApple2.clrButton = color(100, 255, 200);
  } else {
    buttApple2.clrButton = color(255, 100, 0);
  }

}


function mousePressed() {
 if (buttPlay.mouseOverButton() && showMenu) {
 }else if (buttPlay.mouseOverButton()) {
    gameState = 2;
  }
  if (buttAgain.mouseOverButton()) {
    initGame()
  }

  if (buttApple.mouseOverButton()) {
    appleState = 1
  }
  if (buttApple2.mouseOverButton()) {
    appleState = 2
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

  buttApple = new Button("Apple", 10, 580, 1, 550, 100, 50);
  buttApple2 = new Button("Apple 2", 110, 580, 101, 550, 115, 50);

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
