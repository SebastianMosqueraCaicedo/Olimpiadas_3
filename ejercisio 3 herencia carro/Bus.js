class Bus extends MedioTransporte {
    constructor(x, y) {
        super(x, y);


    }
    draw() {
        rectMode(CENTER);
        stroke(this.r, this.g, this.b);
        fill(this.r, this.g, this.b);
        rect(this.x, this.y, 200, 90, 20);

        fill(225);
        stroke(225);
        for (let i = -3; i < 4; i++) {
           rect(this.x+(i*25),this.y-10,20,20);
        }

        fill(220);
        stroke(220);
        for (let i = -1; i < 2; i++) {
            ellipse(this.x+(60*i),this.y+40,40,40);
        }

        stroke(this.r, this.g, this.b);
        fill(this.r, this.g, this.b);
        for (let i = -1; i < 2; i++) {
            ellipse(this.x+(i*60),this.y+40,30,30);
        }
    }
}