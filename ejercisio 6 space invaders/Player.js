class Player extends Ent {
    constructor(x, y, hp) {
        super(x, y);
        this.vel = 3;
        this.dir = 0;
        this.hp = hp;
        this.life = hp;
        this.shot = [];
        this.bullets = 0;
    }
    draw() {
        this.g = (255 / this.hp) * this.life;
        this.r = 255 - ((255 / this.hp) * this.life);
        super.params();
        if (this.life > 0) {
            fill(this.r, this.g, this.b);
            rect(this.x, this.y + 15, 5, 10);
            rect(this.x, this.y, 10, 25);

            switch (this.dir) {
                case 1:
                    this.x += this.vel;
                    break;

                case 2:
                    this.x -= this.vel;
                    break;

                default:
                    break;
            }

            if (this.x - 20 < 0) {
                this.x += this.vel;

            }

            if (this.x + 20 > 600) {
                this.x -= this.vel;

            }

            for (let i = 0; i < this.bullets; i++) {
                this.shot[i].draw();
            }
        }
    }

    shoot() {
        this.bullets++;
        for (let i = 0; i < this.bullets; i++) {
            if (this.bullets > this.shot.length) {
                this.shot.push(new Shot(this.x, this.y - 20));

                console.log(this.shot.length);
                if (this.shot[i].life === 0) {
                    this.bullets--;
                    this.shot[i] = this.shot.pop();
                    this.shot.length = this.bullets;
                    // i couldnt find how to properly delete bullets
                }

            }

            this.shot[i].dir = 2;

        }

    }
}