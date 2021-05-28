class MedioTransporte {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.r = 0;
        this.g = 0;
        this.b = 0;
    }
    draw() {
        fill(this.r, this.g, this.b);
        rectMode(CENTER);
        rect(this.x, this.y, 375, 75);
        fill(255);
        textAlign(CENTER);
        text("Elija entre Carro, CarroMoto, CarroTaxi, Bus, BusMio o BusDoble", this.x, this.y);
        //giving the chance for user immput
    }
}