carro = [];
linea = [];
player = new Player(40, 300);

function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(220);
  fill(150);
  rect(width / 2, height / 2, 50, 600);
  
  player.draw();
  player.params();


}

function keyPressed() {
  switch (key) {
    case 'a':
      player.dir = 3;

      break;
    case 'd':
      player.dir = 4;
      break;

    default:
      break;
  }
}

function keyReleased() {
  player.dir = 0;
}