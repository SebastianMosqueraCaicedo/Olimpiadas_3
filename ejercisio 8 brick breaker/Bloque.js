class Bloque extends Ent {
    constructor(x, y, fila) {
        super(x, y);
        this.fila = fila;
        this.r = 50 * this.fila;
        this.g = 255 - (50 * this.fila);
        this.b = 50;
        this.w = 50;
        this.h = 20;
        this.vivo = true;
    }
    draw() {
        super.params();
        if (this.vivo === true) {
            rect(this.x, this.y, this.w, this.h);
        } else {
            this.x = -500;
        }
    }
}