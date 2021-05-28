class Fantasma extends Ent {
    constructor(x, y) {
        super(x, y);
        this.vel = 3;
        this.dir = round(random(0, 3));
        this.r = random(0, 200);
        this.g = random(100, 150);
        this.b = random(100, 200);

    }
    draw() {
        noStroke();
        if (this.is === true) {
            fill(this.r, this.g, this.b);
            ellipse(this.x, this.y, 40, 40);
            rectMode(CENTER);
            rect(this.x, this.y + 10, 40, 30);

            fill(20);
            ellipse(this.x - 5, this.y, 5, 5);
            ellipse(this.x + 5, this.y, 5, 5);
            stroke(20);
            line(this.x - 15, this.y + 5, this.x + 15, this.y + 5);
        }
        switch (this.dir) {
            case 0:
                this.x += this.vel;
                if (this.x > 650) {
                    this.x = -50;
                }
                break;
            case 1:
                this.x -= this.vel;
                if (this.x < -50) {
                    this.x = 650;
                }
                break;
            case 2:
                this.y += this.vel;
                if (this.y > 650) {
                    this.y = -50;
                }
                break;
            case 3:
                this.y -= this.vel;
                if (this.y < -50) {
                    this.y = 650;
                }
                break;

            default:
                break;
        }
    }

}