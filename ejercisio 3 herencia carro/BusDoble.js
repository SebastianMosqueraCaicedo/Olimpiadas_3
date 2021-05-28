class BusDoble extends Bus {
    constructor(x, y) {
        super(x, y);
this.r=220;
this.g=100;

    }
    draw() {
        rectMode(CENTER);
        stroke(this.r, this.g, this.b);
        fill(this.r, this.g, this.b);
        rect(this.x, this.y, 200, 90, 20);
        rect(this.x, this.y-30, 200, 90, 20);

        fill(225);
        stroke(225);
        for (let i = -2; i < 3; i++) {
            for (let j = 0; j < 2; j++) {
                rect(this.x+(i*30),this.y-10-(j*30),20,20);
            }
        }

        fill(220);
        stroke(220);
        for (let i = -2; i < 3; i++) {

            ellipse(this.x+(40*i),this.y+45,25,25);
            
        }

        stroke(0);
        fill(0);
        for (let i = -2; i < 3; i++) {
            ellipse(this.x+(40*i),this.y+45,15,15);
            
        }
        textAlign(CENTER);
        text("DOO",this.x,this.y+25);
    
    }
}