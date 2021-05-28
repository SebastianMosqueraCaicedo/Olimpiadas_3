bola = new Array(50);
pac = new Pac(300, 300);
fantasma = new Array(5);

function setup() {
  createCanvas(600, 600);
  for (let i = 0; i < 5; i++) {
    fantasma[i] = new Fantasma(random(100, 500), random(100, 500));
    if (dist(fantasma[i].x, fantasma[i].y, 300, 300) < 100) {
      fantasma[i].x += 150;
      fantasma[i].y += 150;
      //this prevents the ghosts from spawning on pac
    }

  }
  for (let i = 0; i < 50; i++) {
    bola[i] = new Bola(random(25, 575), random(25, 575));

  }

}

function draw() {
  background(20);
  for (let i = 0; i < 50; i++) {
    bola[i].draw();
    if (dist(bola[i].getx(), bola[i].gety(), pac.getx(), pac.gety()) < 27) {
      bola[i].is = false;
    }
  }
  for (let i = 0; i < 5; i++) {
    fantasma[i].draw();
    if (dist(fantasma[i].getx(), fantasma[i].gety(), pac.getx(), pac.gety()) < 40) {
      pac.is = false;
    }
  }
  pac.draw();
  if (pac.is === false) {
    textAlign(CENTER);
    stroke(255, 0, 0);
    textSize(30);
    text("GAME OVER", 300, 300);
  }
}

function keyPressed() {
  switch (key) {
    case 'a':
      pac.dir = 1;
      break;
    case 'd':
      pac.dir = 0;
      break;
    case 's':
      pac.dir = 2;
      break;
    case 'w':
      pac.dir = 3;
      break;

    default:
      pac.dir = 4;
      break;
  }
}

function keyReleased() {
  pac.dir = 4;
}