class Bar {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.vel = 5;
        this.dir = 0;
    }
    draw() {
rectMode(CENTER);
fill(10,220,10);
noStroke();
rect(this.x,this.y,25,100)
if (this.dir!=0){
this.y-= (this.dir*this.vel);
}
if((this.y-50)<0){
    this.y+= this.vel;
}
if((this.y+50)>500){
    this.y-= this.vel;
}
    }
    getx() {
        return this.x;
    }
    gety() {
        return this.y;
    }
}