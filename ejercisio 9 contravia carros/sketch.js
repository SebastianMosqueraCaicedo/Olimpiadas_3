carro = [];
linea = [];
player = new Player(40, 300);
let oveja = 8;

function setup() {
  createCanvas(800, 600);
  for (let i = 0; i < 2; i++) {
    linea.push(new Array(8));
    for (let j = 0; j < 8; j++) {
      linea[i][j] = new Linea(200 + (400 * i), 40 + (75 * j));

    }
  }

  for (let i = 0; i < 7; i++) {
    if (i != 3) {
      carro[i] = new Carro(100 + (100 * i), -100 + (random(-800, 0)));
    }
  }
}

function draw() {
  background(220);
  fill(150);
  rect(width / 2, height / 2, 50, 600);




  for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 8; j++) {
      linea[i][j].draw();
    }
  }

  player.draw();

  for (let i = 0; i < 7; i++) {
    if (i != 3) {
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