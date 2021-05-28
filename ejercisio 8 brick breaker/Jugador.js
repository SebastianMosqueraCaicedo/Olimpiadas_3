class Jugador extends Ent {
    constructor(x, y) {
        super(x, y);
        this.fila = 0;
        this.r = 50 * this.fila;
        this.g = 255 - (50 * this.fila);
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

        if ((this.x - (this.w / 2)) < 0) {
            this.x += this.vel;
        }
        if ((this.x + (this.w / 2)) > 400) {
            this.x += this.vel;
        }
    }
}