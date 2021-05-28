class Shot extends Ent {
    constructor(x, y) {
        super(x, y);
        this.life = 1;
        this.dir = 1;
    }
    draw() {
        super.params();
        if (this.life > 0) {
            fill(255, this.g, this.b);
            rect(this.x, this.y, 6, 20);
            if (this.dir === 1) {
                this.y += this.vel;
            } else {
                this.y -= this.vel;
            }
        }
        if (this.y > 630) {
            this.life = 0;
        }
    }
}