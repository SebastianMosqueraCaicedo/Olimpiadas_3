class cuadro {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.clicked = false;
        this.state = 0;
    }

    draw() {
        rectMode(CENTER);
        fill(240);
        rect(this.x, this.y, 50, 50);
    }

    click() {
        if (this.clicked === false && dist(this.y, this.x, mouseY, mouseX) < 50 && mouseIsPressed && this.state === 0) {
            this.state = round(random(1, 2));
            this.clicked = true;

            switch (state) {
                case 1:
                    rectMode(CENTER);
                    fill(240, 0, 0);
                    rect(this.x, this.y, 20, 20);
                    break;

                case 2:
                    fill(0, 0, 240);
                    ellipse(this.x, this.y, 20, 20);
                    break;

                default:
                    break;
            }
            console.log(state);
        }
    }


}