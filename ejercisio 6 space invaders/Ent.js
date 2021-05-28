class Ent {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.r = 0;
        this.g = 0;
        this.b = 0;
        this.vel = 2;
        this.life = 1;
        this.dir = 0;
    }
    draw() {
        text("not found", this.x, this.y);
    }
    params() {
        rectMode(CENTER);
        textAlign(CENTER);
        strokeWeight(3);
        textSize(20);
    }
    getx() {
        return this.x;
    }
    gety() {
        return this.y;
    }
}