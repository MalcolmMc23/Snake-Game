class Food {
    constructor(x, y) {
        this.loc = createVector(x, y);
        this.size = cellSize

    }

    run() {
        this.render();
        this.update();
    }

    render() {
      if(appleState === 2){
        image(imgApple, this.loc.x, this.loc.y, 23, 19)
      }
      if(appleState === 1) {
        image(imgApple2, this.loc.x, this.loc.y, 20, 23 )
      }

        // fill(255, 0, 0)
        // rect(this.loc.x, this.loc.y, this.size);
    }

    update() {
        if (snake.loc.x == this.loc.x && snake.loc.y == this.loc.y) {
            let x = floor(random(cols)) * cellSize;
            let y = floor(random(rows)) * cellSize;
            food = new Food(x, y);
            snake.segment.push(createVector(this.loc.x, this.loc.y))
            score++
            // eatSound.play()

        }
    }

}
