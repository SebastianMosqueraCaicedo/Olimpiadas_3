class Ent {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.vel = 3;
        this.dir = 0;
        this.w = 0;
        this.h = 0;
        this.r = 0;
        this.g = 0;
        this.b = 0;
    }
    draw() {

    }
    params() {
        rectMode(CENTER);
        strokeWeight(3);
        stroke(this.r - 100, this.g - 100, this.b - 100);
        fill(this.r, this.g, this.b);
    }

    hitUp() {
        return (this.y - (this.h / 2));
    }
    hitRi() {
        return (this.x + (this.w / 2));
    }
    hitDo() {
        return (this.y + (this.h / 2));
    }
    hitLe() {
        return (this.x - (this.w / 2));
    }

    getX() {
        return this.x;
    }
    getY() {
        return this.y;
    }
}