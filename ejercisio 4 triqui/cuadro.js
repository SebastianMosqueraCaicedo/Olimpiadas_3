class Cuadro {
    constructor(x, y,state) {
        this.x = x;
        this.y = y;
        this.clicked = false;
        this.state = state;
    }

    draw() {

        rectMode(CENTER);
        fill(240);
        rect(this.x, this.y, 100, 100);
switch (this.state) {
    case 1:
        rectMode(CENTER);
        fill(240,0,0);
        rect(this.x, this.y, 40, 40);
        break;
        case 2:
            fill(0,0,240);
            ellipse(this.x, this.y, 40, 40);
            break;

    default:
        break;
}
    
    }

// there was too much pressure on the class, and the mouseclick function is quite needed


}