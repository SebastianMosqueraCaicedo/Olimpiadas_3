class Alien extends Ent {
    constructor(x, y, hp) {
        super(x, y);
        this.dir = 1;
        this.hp = hp;
        this.life = hp;
        this.seed = Math.random();
        this.shot = [];
        this.bullets = 0;
    }
    draw() {
        this.g = (255 / this.hp) * this.life;
        this.r = 255 - ((255 / this.hp) * this.life);
        super.params();
        if (this.life > 0) {
            fill(this.r, this.g, this.b);
            rect(this.x, this.y, 40, 25);

            if ((frameCount % Math.round(((1 / this.vel) * 120))) === 0) { //this allows it to speed up
                if (this.dir === 1) {
                    this.x += 15;
                } else {
                    this.x -= 15;
                }
            }

            if (this.x - 20 < 0) {
                this.x += 20;
                this.y += 30;
                this.dir = 1;
                this.vel *= 1.2;
            }


            if (this.x + 20 > 600) {
                this.x -= 20;
                this.y += 30;
                this.dir = 2;
                this.vel *= 1.2;
            }

            if ((frameCount % Math.round((((this.seed + 60) * 2) + (120 * Math.random())))) === 0) { //this allows it to speed up
                this.bullets++;

            }



            for (let i = 0; i < this.bullets; i++) {
                if (this.bullets > this.shot.length) {
                    this.shot.push(new Shot(this.x, this.y + 20));

                    if (this.shot[i].life === 0) {
                        this.bullets--;
                        this.shot[i] = this.shot.pop();
                        this.shot.length = this.bullets;
                        // i couldnt find how to properly delete bullets
                    }

                }
                this.shot[i].draw();

            }
        }
    }
}