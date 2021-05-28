class Ball {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.vel = 2;
        this.dir = Math.random()*(15)-7.5;
        this.turn= Math.round(Math.random());
    }
    draw() {
fill(220,10,10);
ellipse(this.x,this.y,30,30)
if(this.turn=0){
    this.x-=this.vel;
} else{
    this.x+=this.vel;
}
this.y= (this.y+this.dir);

    }
    getx() {
        return this.x;
    }
    gety() {
        return this.y;
    }
}