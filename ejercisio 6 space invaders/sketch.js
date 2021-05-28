shield = new Shield(100, 400);
aliens = [];
for (let i = 0; i < 3; i++) {

  aliens.push(new Array(3));
}

player = new Player(300, 500, 2)

function setup() {
  createCanvas(600, 600);
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      aliens[i][j] = new Alien(100 + (200 * i), 50 + (100 * j), 2 + (j));

    }
  }
}

function draw() {
  background(220);
  shield.draw();
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      aliens[i][j].draw();
      aliens[i][j].shoot();
      if (aliens[i][j].bullets > 0) {
        for (let i = 0; i < aliens[i][j].bullets; i++) {
          console.log(aliens[i][j].bullets);
        }
      }

    }
  }





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

function mousePressed() {

  player.shoot();

}