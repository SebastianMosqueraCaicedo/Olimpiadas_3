class Carro extends MedioTransporte {
    constructor(x, y) {
        super(x, y);


    }
    draw() {
        rectMode(CENTER);
        stroke(this.r, this.g, this.b);
        fill(this.r, this.g, this.b);
        rect(this.x, this.y, 200, 75, 20);
        rect(this.x+10, this.y-50, 150, 60, 10);

        fill(220);
        stroke(220);
        ellipse(this.x-40,this.y+30,60,60);
        ellipse(this.x+40,this.y+30,60,60);

        stroke(this.r, this.g, this.b);
        fill(this.r, this.g, this.b);
        ellipse(this.x-40,this.y+30,50,50);
        ellipse(this.x+40,this.y+30,50,50);
    }
}