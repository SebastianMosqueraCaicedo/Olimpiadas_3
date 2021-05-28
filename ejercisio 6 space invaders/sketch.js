shield = new Shield(100, 400);
shot = new Shot(100, 400);
alien1 = new Alien(500, 100, 5);
alien2 = new Alien(200, 100, 5);
alien3 = new Alien(50, 100, 5);

player = new Player(300, 500, 2)

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(220);
  shield.draw();
  shot.draw();
  alien1.draw();
  alien2.draw();
  alien3.draw();
  player.draw();

}

function keyPressed() {
  switch (key) {
    case 'a':
      player.dir = 2;
      break;

    case 'd':
      player.dir = 1;
      break;

    default:
      break;
  }
}

function keyReleased() {
  player.dir = 0;
}
function mousePressed(){

    player.shoot();

}