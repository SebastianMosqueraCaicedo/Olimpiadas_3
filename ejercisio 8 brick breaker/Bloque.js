class Bloque extends Ent {
    constructor(x, y) {
        super(x, y);
        this.fila = 0;
        this.r = 50 * this.fila;
        this.g = 255 - (50 * this.fila);
        this.b = 50;
        this.w = 50;
        this.h = 20;
    }
    draw() {
        super.params();
        rect(this.x, this.y, this.w, this.h);
    }
}