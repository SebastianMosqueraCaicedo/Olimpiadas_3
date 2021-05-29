carro = [];
linea = [];
player = new Player(300, 300);
let oveja = 8;

function setup() {
  createCanvas(800, 600);
  for (let i = 0; i < 8; i++) {
    linea.push(new Array(2));
    for (let j = 0; j < 2; j++) {
      linea[i][j] = new Linea(40 + (100 * i), 200 + (200 * j));

    }
  }

  for (let i = 0; i < 7; i++) {

    carro[i] = new Carro(-100 + (random(-800, 0)), 40 + (100 * i));
    carro[i].vel = random(3, 6);
  }
}

function draw() {
  background(220);

  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 2; j++) {
      linea[i][j].draw();
    }
  }

  player.draw();

  for (let i = 0; i < 7; i++) {

    carro[i].draw();
    if (oveja === 8 || oveja === i) {
      if (player.hitReg(carro[i])) {
        player.hit = true;
        carro[i].hit = true;
        oveja = i;

      }
    }
  }


}

function keyPressed() {

  switch (key) {
    case 'w':
      player.dir = 1;

      break;
    case 's':
      player.dir = 2;
      break;

    default:
      break;
  }
}

function keyReleased() {
  player.dir = 0;
}