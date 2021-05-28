bloque = new Bloque(50, 50);
jugador = new Jugador(200, 350);

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  bloque.draw();
  jugador.draw();
}

function keyPressed() {
  switch (key) {
    case 'a':
      jugador.dir = 1;
      break;

    case 'd':
      jugador.dir = 2;
      break;

    default:
      break;
  }
}

function keyReleased() {
  jugador.dir = 0;
}