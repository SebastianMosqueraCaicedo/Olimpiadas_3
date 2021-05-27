class Persona {
    constructor(x, y, piel, cabello, cara, ojos) {
        this.x = x;
        this.y = y;
        this.piel = piel;
        this.cabello = cabello;
        this.cara = cara;
        this.ojos = ojos;
    }
    draw() {

        switch (this.piel) {
            case "verde":
                fill(20, 240, 20);
                ellipse(this.x, this.y, 100, 100);
                break;
            case "azul":
                fill(20, 20, 240);
                ellipse(this.x, this.y, 100, 100);
                break;
            case "roja":
                fill(240, 20, 20);
                ellipse(this.x, this.y, 100, 100);
                break;
            case "amarilla":
                fill(240, 240, 20);
                ellipse(this.x, this.y, 100, 100);
                break;

            default:
                break;
        }
        switch (this.cara) {
            case "enfadado":
line(this.x-10,this.y-10,this.x-10,this.y-20);
line(this.x+10,this.y-10,this.x+10,this.y-20);

beginShape(LINES);
vertex(this.x-12, this.y-25);
vertex(this.x, this.y-15);
vertex(this.x, this.y-15);
vertex(this.x+12, this.y-25);
endShape(); //with lines it is kind of the same
                break;

            default:
                break;
        }
    }
}