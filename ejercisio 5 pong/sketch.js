let left = new Bar(50,250);
let rite = new Bar(950,250);
let ball = new Ball(500,250);
let contLeft = 0;
let contRite = 0;
function setup() {
  createCanvas(1000, 500);
}

function draw() {

  background(220);
  left.draw();
  rite.draw();
  ball.draw();

if(ball.gety()>485){
  ball.dir= -ball.dir;
}
if(ball.gety()<15){
  ball.dir= -ball.dir;
}
if(ball.getx()>1020){
  ball.turn= 0;
  ball.x=500;
  ball.y=250;
  contRite++;
}
if(ball.getx()<-20){
  ball.turn= 1;
  ball.x=500;
  ball.y=250;
  contLeft++;
}
}

function keyPressed(){
  switch (key) {
    case 'w':
      left.dir=1;
      break;
      case 's':
        left.dir=-1;
        break;
  
    default:
      break;
  }
}
function keyReleased(){
left.dir=0;
}