class Carro extends Ent {
    constructor(x, y) {
        super(x, y);
        this.dir = 2;
        this.w = 40;
        this.h = 60;
        this.r = 200;
        this.g = 50;
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
        fill(0,100,200);
        rect(this.x, this.y + 10, 30, 20);
    }
}