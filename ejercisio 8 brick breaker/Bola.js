class Bola extends Ent {
    constructor(x, y) {
        super(x, y);
        this.fila = 0;
        this.r = 200;
        this.g = 200;
        this.w = 20;
        this.h = 20;
    }
    draw() {
        super.params();
        ellipse(this.x, this.y, this.w, this.h);

        if ((this.hitLe()) < 0 - this.w) {
            this.x = 400 + this.w;
        }
        if ((this.hitRi()) > 400 + this.w) {
            this.x = 0 - this.w;
        }
        if ((this.hitUp()) < 0 - this.h) {
            this.y = 400 + this.h;
        }
        if ((this.hitDo()) > 400 + this.h) {
            this.y = 0 - this.h;
        }
    }
}