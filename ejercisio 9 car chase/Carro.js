class Carro extends Ent {
    constructor(x, y) {
        super(x, y);
        this.vel = 3;
        this.dir = 4;
        this.w = 60;
        this.h = 40;
        this.r = 100;
        this.g = (this.y / 255) * 100;
        this.b = 255 - ((this.y / 255) * 100);
    }
    draw() {
console.log(this);
        for (let i = -1; i < 2; i++) {
            for (let j = -1; j < 2; j++) {
                if (i != 0) {
                    fill(0);
                    rect(this.x + (15 * i), this.y + (20 * j), 10, 5);
                }
            }

        }
        super.params();
        fill(0, 100, 200);
        rect(this.x+ 10, this.y , 20, 30);

        if (this.hitLe() > 800) {
            this.x = 0 - (100 + (random(200, 0)));
        }

        if (this.hit === true) {
            for (let i = -1; i < 2; i++) {
                for (let j = -1; j < 2; j++) {
                    if (j != 0) {
                        fill(255, 150, 0, 99);
                        triangle(this.x + (random(-20, 20)), this.y + (random(-20, 20)),
                            this.x + (random(-20, 20)), this.y + (random(-20, 20)),
                            this.x + (random(-20, 20)), this.y + (random(-20, 20)))
                    }
                }
            }
        } 
            super.move();
        

    }
}