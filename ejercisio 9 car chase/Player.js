class Player extends Ent {
    constructor(x, y) {
        super(x, y);
        this.dir = 0;
        this.w = 60;
        this.h = 40;
        this.r = 230;
        this.g = 50;
    }
    draw() {

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
        rect(this.x + 10, this.y, 20, 30);

        if (this.hitUp() < 0) {
            this.y += this.vel;
        }

        if (this.hitDo() > 600) {
            this.y -= this.vel;
        }

        if (this.hitRi() > 800) {
            this.x += this.vel;
            textAlign(CENTER);
            fill(255, 0, 0);
            textSize(22);
            text("Win", 400, 300);

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
            textAlign(CENTER);
            fill(255, 0, 0);
            textSize(22);
            text("Lose", 400, 300);

        } else {
            this.x += 1;

        }

        super.move();
    }
}