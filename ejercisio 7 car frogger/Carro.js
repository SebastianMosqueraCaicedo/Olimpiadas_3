class Carro extends Ent {
    constructor(x, y) {
        super(x, y);
        this.dir = 2;
        this.w = 40;
        this.h = 60;
        this.r = 100;
        this.g = (this.x / 255) * 100;
        this.b = 255 - ((this.x / 255) * 100);
    }
    draw() {

        for (let i = -1; i < 2; i++) {
            for (let j = -1; j < 2; j++) {
                if (j != 0) {
                    fill(0);
                    rect(this.x + (20 * i), this.y + (15 * j), 5, 10);
                }
            }

        }
        super.params();
        fill(0, 100, 200);
        rect(this.x, this.y + 10, 30, 20);

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
        } else {
            super.move();
        }

    }
}