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
        fill(255, 0, 0);
        image(imgApple, this.loc.x, this.loc.y, 92, 76)
        rect(this.loc.x, this.loc.y, this.size);
    }

    update() {
        if (snake.loc.x == this.loc.x && snake.loc.y == this.loc.y) {
            let x = floor(random(cols)) * cellSize;
            let y = floor(random(rows)) * cellSize;
            food = new Food(x, y);
            snake.segment.push(createVector(this.loc.x, this.loc.y))
            score++

        }
    }

}
