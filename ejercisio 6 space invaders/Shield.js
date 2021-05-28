class Shield extends Ent {
    constructor(x, y) {
        super(x, y);
        this.b = 100;
        this.life = 5;
    }
    draw() {
        super.params();
        this.r = 250 - (this.life * 50);
        this.g = this.life * 50;
        if (this.life > 0) {
            fill(this.r, this.g, this.b);
            rect(this.x, this.y, 50, 20);
            this.x += this.vel;
        }
        if (this.x > 650) {
            this.x = -50;
        }
    }
}