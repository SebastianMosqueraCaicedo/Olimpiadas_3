class BusMio extends Bus {
    constructor(x, y) {
        super(x, y);
this.b=220;
this.g=100;

    }
    draw() {
        rectMode(CENTER);
        stroke(this.r, this.g, this.b);
        fill(this.r, this.g, this.b);
        rect(this.x, this.y, 200, 90, 20);

        fill(225);
        stroke(225);
        for (let i = -2; i < 3; i++) {
           rect(this.x+(i*30),this.y-10,20,20);
        }

        fill(220);
        stroke(220);
        for (let i = -1; i < 2; i++) {
            if(i != 0){
            ellipse(this.x+(60*i),this.y+40,40,40);
            }
        }
        textAlign(CENTER);
        text("MIO",this.x,this.y+25);

        stroke(0);
        fill(0);
        for (let i = -1; i < 2; i++) {
            if(i != 0){
            ellipse(this.x+(i*60),this.y+40,30,30);
        }
    }
    }
}