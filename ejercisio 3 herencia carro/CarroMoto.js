class CarroMoto extends Carro {
    constructor(x, y) {
        super(x, y);
        this.r = 255;
        this.g = 255;
        this.b = 255;
    }
    draw() {
        rectMode(CENTER);
        stroke(this.b, this.g - 100, this.r);
        fill(this.b, this.g - 100, this.r);
        rect(this.x + 10, this.y - 50, 150, 60, 10);

        stroke(this.r, this.g, this.b);
        fill(this.r, this.g, this.b);
        rect(this.x, this.y, 200, 75, 5);
        fill(0);
        textAlign(CENTER);
        text("MOT", this.x, this.y) - 10;

        fill(220);
        stroke(220);
        ellipse(this.x - 40, this.y + 30, 60, 60);
        ellipse(this.x + 40, this.y + 30, 60, 60);

        stroke(0);
        fill(0);
        ellipse(this.x - 40, this.y + 30, 40, 40);
        ellipse(this.x + 40, this.y + 30, 40, 40);
        arc(this.x-110,this.y,35,25,(3*PI)/2,HALF_PI)
    }
}