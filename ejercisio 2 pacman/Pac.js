class Pac extends Ent {
    constructor(x, y) {
        super(x, y);
        this.dir = 4;
        this.vel = 6;
        this.r = 200;
        this.g = 200;
        this.b = 0;

    }
    draw() {
        stroke(20);
        fill(this.r, this.g, this.b);
        if (this.is === true) {


            if (frameCount % 20 < 5 || frameCount % 20 > 15 ) {

                arc(this.x, this.y, 40, 40, PI / 6, (11 * PI) / 6);
            } else {
                switch (this.dir) {
                    case 0:
                        ellipse(this.x, this.y, 40, 40);
                        line(this.x, this.y, this.x + 20)
                        break;
                    case 1:
                        ellipse(this.x, this.y, 40, 40);
                        line(this.x, this.y, this.x - 20)
                        break;
                    default:
                        ellipse(this.x, this.y, 40, 40);
                        line(this.x, this.y, this.x + 20)
                        break;
                }
            }
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