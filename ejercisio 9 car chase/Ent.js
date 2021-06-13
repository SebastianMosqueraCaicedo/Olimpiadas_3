class Ent {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.vel = 4;
        this.dir = 0;
        this.w = 0;
        this.h = 0;
        this.r = 0;
        this.g = 0;
        this.b = 0;
        this.hit = false;
    }
    draw() {

    }
    params() {
        rectMode(CENTER);
        noStroke();
        fill(this.r, this.g, this.b);
        rect(this.x, this.y, this.w, this.h);
    }
    move() {
        switch (this.dir) {
            case 1:
                this.y -= this.vel;
                break;
            case 2:
                this.y += this.vel;
                break;
            case 3:
                this.x -= this.vel;
                break;
            case 4:
                this.x += this.vel;
                break;

            default:
                break;
        }
        if (this.hit === true) {
            this.dir = 3;
            this.vel = 9;
        }
    }

    hitReg(obj) {

        if (this.hitUp() > obj.hitUp() &&
            this.hitUp() < obj.hitDo() &&
            dist(this.getLe(), this.getUp(),obj.getLe(),obj.getDo()) < 40 &&
            this.getX() < obj.hitRi() || this.hitDo() > obj.hitUp() &&
            this.hitDo() < obj.hitDo() &&
            this.getX() > obj.hitLe() &&
            this.getX() < obj.hitRi() || this.hitRi() > obj.hitLe() &&
            this.hitRi() < obj.hitRi() &&
            this.getY() > obj.hitUp() &&
            this.getY() < obj.hitDo() || this.hitLe() > obj.hitLe() &&
            this.hitLe() < obj.hitRi() &&
            this.getY() > obj.hitUp() &&
            this.getY() < obj.hitDo()) {
            this.hit = true;
        }
        return this.hit;
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
