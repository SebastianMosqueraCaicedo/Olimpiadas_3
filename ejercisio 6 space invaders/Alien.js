class Alien extends Ent {
    constructor(x, y, hp) {
        super(x, y);
        this.dir = 1;
        this.hp = hp;
        this.life = hp;
        this.seed = Math.random();
    }
    draw() {
        this.g = (255 / this.hp) * this.life;
        this.r = 255 - ((255 / this.hp) * this.life);
        super.params();
        console.log(this.dir);
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
                this.y += 15;
                this.dir = 1;
                this.vel *= 1.2;
            }


            if (this.x + 20 > 600) {
                this.x -= 20;
                this.y += 15;
                this.dir = 2;
                this.vel *= 1.2;
            }
        }
    }
}