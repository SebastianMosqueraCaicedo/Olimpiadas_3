class Bola extends Ent {
    constructor(x, y) {
        super(x, y);
        this.fila = 0;
        this.r = 200;
        this.g = 200;
        this.w = 20;
        this.h = 20;
        this.vel = 1.5;
        this.dir = Math.random() * (15) - 7.5;
    }
    draw() {
        super.params();
        ellipse(this.x, this.y, this.w, this.h);
        this.y += this.vel;
        this.x = (this.x + this.dir);

        console.log(this.vel);

        if ((this.hitLe()) < 0 - this.w) {
            this.x = 400 + this.w;
            this.x -= this.w / 2;
        }
        if ((this.hitRi()) > 400 + this.w) {
            this.x = 0 - this.w;
            this.x += this.w / 2;
        }
        if ((this.hitUp()) < 0 - this.h) {
            this.y = 400 + this.h;
            this.y -= this.h / 2;
        }
        if ((this.hitDo()) > 400 + this.h) {
            this.y = 0 - this.h;
            this.y += this.h / 2;
        }
    }
}