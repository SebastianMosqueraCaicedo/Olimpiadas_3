let left = new Bar(50, 250);
let rite = new Bar(950, 250);
let ball = new Ball(500, 250);
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

  fill(0);
  textSize(15);
  text(contLeft, 100, 50);
  text(contRite, 900, 50);

  if (frameCount<60*5){
    text("Play with w,s", 200, 250);
    text("Play with mouse", 700, 250);
  }
  if (ball.getx() > 1020) {
    ball.turn = 0;
    ball.x = 500;
    ball.y = 250;
    contRite++;
    ball.vel += 1;
  }
  if (ball.getx() < -20) {
    ball.turn = 1;
    ball.x = 500;
    ball.y = 250;
    contLeft++;
    ball.vel += 1;
  }

  if (ball.getx() < 78 && ball.getx() > 48 && ball.gety() > (left.gety() - 50) &&
    ball.gety() < (left.gety() + 50)) {
    ball.turn = 1;
    ball.dir = Math.random() * (15) - 7.5;
  }
  if (ball.getx() > 1000-78 && ball.getx() < 1000-48 && ball.gety() > (rite.gety() - 50) &&
  ball.gety() < (rite.gety() + 50)) {
  ball.turn = 0;
  ball.dir = Math.random() * (15) - 7.5;
}
}

function mouseDragged() {
  if (dist(rite.getx(), rite.gety(), mouseX, mouseY) < 100) {
    rite.y = mouseY;
  }
}

function keyPressed() {
  switch (key) {
    case 'w':
      left.dir = 1;
      break;
    case 's':
      left.dir = -1;
      break;

    default:
      break;
  }
}

function keyReleased() {
  left.dir = 0;
}