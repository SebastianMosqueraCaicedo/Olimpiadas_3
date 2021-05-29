class Linea extends Ent {
    constructor(x, y) {
        super(x, y);
        this.dir = 3;
        this.vel = 10;
        this.w = 40;
        this.h = 10;
        this.r = 250;
        this.g = 250;
        this.b = 250
    }
    draw() {
        super.params();
        super.move();

        if (this.hitLe() < 0) {
            this.x = 820;
        }
    }
}