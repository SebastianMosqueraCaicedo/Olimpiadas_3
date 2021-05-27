class Persona {

    constructor(x, y, piel, cabello, cara, ojos) {
        this.x = x;
        this.y = y;
        this.piel = piel;
        this.cabello = cabello;
        this.cara = cara;
        this.ojos = ojos;
        this.posx;
        this.posy;

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
                beginShape(LINES);
                vertex(this.x - 12, this.y - 25);
                vertex(this.x, this.y - 15);
                vertex(this.x, this.y - 15);
                vertex(this.x + 12, this.y - 25);
                endShape(); //with lines it is kind of the same

                noFill();
                arc(this.x, this.y + 20, 15, 15, PI, PI * 2, OPEN);
                break;

            case "serio":
                beginShape(LINES);
                vertex(this.x - 12, this.y - 25);
                vertex(this.x + 12, this.y - 25);
                endShape(); //with lines it is kind of the same

                line(this.x - 7, this.y + 13, this.x + 7, this.y + 13);
                break;

            default:
                break;
        }
        switch (this.ojos) {
            case "azules":
                stroke(20, 150, 240);
                line(this.x - 10, this.y - 10, this.x - 10, this.y - 20);
                line(this.x + 10, this.y - 10, this.x + 10, this.y - 20);
                stroke(0);
                break;
            case "rojos":
                stroke(255, 10, 10);
                line(this.x - 10, this.y - 10, this.x - 10, this.y - 20);
                line(this.x + 10, this.y - 10, this.x + 10, this.y - 20);
                stroke(0);
                break;
            case "verdes":
                stroke(0, 250, 100);
                line(this.x - 10, this.y - 10, this.x - 10, this.y - 20);
                line(this.x + 10, this.y - 10, this.x + 10, this.y - 20);
                stroke(0);
                break;
            default:
                break;
        }
        switch (this.cabello) {
            case "marge":

                this.posx = new Array(5);
                this.posy = new Array (9);
                for (let j = -2; j < 3; j++) {
                    for (let i = -4; i < 3; i++) {

                    this.posx[j]=this.x+(j*10);
                    this.posy[i]=this.y-75+(i*15); 

                    fill(0,100,200);
                    ellipse(this.posx[j],this.posy[i],20,20);
                }
        }
        break;
        case "punk":

        break;
        case "mal":

        break;

        default:
        break;
    }
}
}