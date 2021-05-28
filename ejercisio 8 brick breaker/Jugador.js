class Jugador extends Ent {
    constructor(x, y) {
        super(x, y);
        this.fila = 0;
        this.r = 200;
        this.g = 0;
        this.b = 200;
        this.w = 80;
        this.h = 10;
    }
    draw() {
        super.params();
        rect(this.x, this.y, this.w, this.h);

        switch (this.dir) {
            case 1:
                this.x -= this.vel;
                break;

            case 2:
                this.x += this.vel;
                break;

            default:
                break;
        }

        if (this.hitLe() < 0) {
            this.x += this.vel;
        }
        if (this.hitRi() > 400) {
            this.x -= this.vel;
        }
    }
}