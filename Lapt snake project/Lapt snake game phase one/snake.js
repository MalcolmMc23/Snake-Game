class Snake {
    constructor(loc, vel) {
      this.loc = createVector();
      this.vel = createVector();
      this.size = cellSize;
      this.segment = []
    }
    run() {
      this.render();
      this.update();
      this.checkWalls();
    }
    render() {
      fill(0, 0, 255);
      rect(this.loc.x, this.loc.y, this.size);
      for (let i = 0; i < this.segment.length; i++) {
        rect(this.segment[i].x, this.segment[i].y, this.size);
  
      }
    }
  
    update() {
      if (this.segment.length > 0) {
        for (let i = this.segment.length - 1; i >= 1; i--) {
          this.segment[i].x = this.segment[i - 1].x
          this.segment[i].y = this.segment[i - 1].y
        }
        this.segment[0].x = this.loc.x
        this.segment[0].y = this.loc.y
      }
      this.loc.add(this.vel)
      if (this.checkWalls() || this.checkSnake()) {
        gameState = 3
        this.vel = createVector();
        // this.loc.x = 0
        // this.loc.y = 0
      }
  
    }
  
    checkWalls() {
      if (this.loc.x < 0 ||
        this.loc.x > width ||
        this.loc.y < 0 ||
        this.loc.y > height) {
        return true
      }
      return false
    }
  
  
    checkSnake() {
      for (let i = 0; i < this.segment.length; i++) {
        if (this.loc.x === this.segment[i].x &&
          this.loc.y === this.segment[i].y)
          return true
      }
      return false
    }
  
  
  
  }
  