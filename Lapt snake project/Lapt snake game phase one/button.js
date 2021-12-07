
class Button {
    constructor(msg, x, y, w, h){
        this.msg = msg;
        this.loc = createVector(x,y);
        this.textLoc = createVector(this.loc.x + 20, this.loc.y + 35);
        this.w = w;
        this.h = h;
        this.clrButton = color(0,255,100);
        this.clrText = color(100,100,255)
    }
 
    run() {
        this.render();
    }
    render() {
        fill(this.clrButton)
        rect(this.loc.x, this.loc.y, this.w, this.h);
        textSize(30);
        fill(this.clrText);
        stroke(this.clrText);
        text(this.msg, this.textLoc.x, this.textLoc.y);
    }
     mouseOverButton() {
        if(mouseX > this.loc.x &&
            mouseX < this.loc.x + this.w &&
            mouseY > this.loc.y &&
            mouseY < this.loc.y + this.h
            ) {
                return true;
              } else {
                return false;
            }
    }
 }
 
 
 