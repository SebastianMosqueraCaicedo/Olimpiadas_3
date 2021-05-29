bloque = [];
for (let i = 0; i < 5; i++) {
  bloque.push(new Array(4));
}
jugador = new Jugador(200, 350);
bola = new Bola(200, 200);

function setup() {
  createCanvas(400, 400);
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 4; j++) {
      bloque[i][j] = new Bloque(70 + (60 * i), 20 + (25 * j), j);
    }
  }
}

function draw() {
  background(220);
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 4; j++) {
      bloque[i][j].draw();
      if (bola.hitUp() > bloque[i][j].hitUp() &&
        bola.hitUp() < bloque[i][j].hitDo() &&
        bola.getX() > bloque[i][j].hitLe() &&
        bola.getX() < bloque[i][j].hitRi()) {
        bola.vel = -bola.vel;
        bola.dir = Math.random() * (5) - 2.5;
        bloque[i][j].vivo = false;
        console.log(" 4364");
      }

      if (bola.hitDo() > bloque[i][j].hitUp() &&
        bola.hitDo() < bloque[i][j].hitDo() &&
        bola.getX() > bloque[i][j].hitLe() &&
        bola.getX() < bloque[i][j].hitRi()) {
        bola.vel = -bola.vel;
        bola.dir = Math.random() * (5) - 2.5;
        bloque[i][j].vivo = false;
        console.log(" 4364");
      }

      if (bola.hitRi() > bloque[i][j].hitLe() &&
        bola.hitRi() < bloque[i][j].hitRi() &&
        bola.getY() > bloque[i][j].hitUp() &&
        bola.getY() < bloque[i][j].hitDo()) {
        bola.dir = -bola.dir;
        bloque[i][j].vivo = false;
        console.log(" 4364");
      }

      if (bola.hitLe() > bloque[i][j].hitLe() &&
        bola.hitLe() < bloque[i][j].hitRi() &&
        bola.getY() > bloque[i][j].hitUp() &&
        bola.getY() < bloque[i][j].hitDo()) {
        bola.dir = -bola.dir;
        bloque[i][j].vivo = false;
        console.log(" 4364");
      }

    }
  }

  jugador.draw();
  bola.draw();

  if (bola.hitUp() > jugador.hitUp() &&
    bola.hitUp() < jugador.hitDo() &&
    bola.getX() > jugador.hitLe() &&
    bola.getX() < jugador.hitRi()) {
    bola.vel = -bola.vel;
    bola.dir = Math.random() * (5) - 2.5;
    console.log(" 4364");
  }

  if (bola.hitDo() > jugador.hitUp() &&
    bola.hitDo() < jugador.hitDo() &&
    bola.getX() > jugador.hitLe() &&
    bola.getX() < jugador.hitRi()) {
    bola.vel = -bola.vel;
    bola.dir = Math.random() * (5) - 2.5;
    console.log(" 4364");
  }

  if (bola.hitRi() > jugador.hitLe() &&
    bola.hitRi() < jugador.hitRi() &&
    bola.getY() > jugador.hitUp() &&
    bola.getY() < jugador.hitDo()) {
    bola.dir = -bola.dir;
    console.log(" 4364");
  }
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