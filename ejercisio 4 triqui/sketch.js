let block = [];
for (let j = 0; j < 3; j++) {
  block.push(new Array(3));
}
let turn = 0; //so that every time a square is changed, the next is the opposite

for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    block[j][i] = new Cuadro(150 + (150 * i), 150 + (150 * j), 0);
    console.log(block[i][j]);
    console.log(i, j);
  }
}

function setup() {
  createCanvas(700, 700);
}

function draw() {
  background(220);

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      block[j][i].draw();
      if ((block[j][0].state === 1 && block[j][1].state === 1 &&
          block[j][2].state === 1) || (block[0][i].state === 1 && block[1][i].state === 1 &&
          block[2][i].state === 1) || (block[0][0].state === 1 && block[1][1].state === 1 &&
          block[2][2].state === 1) || (block[2][0].state === 1 && block[1][1].state === 1 &&
          block[0][2].state === 1)) { // state comparison for red in horizontal, vertical and diagonal manners
        textAlign(CENTER);
        fill(240, 0, 0);
        textSize(32);
        text("Red Wins", block[0][1].getx(), 600);
        turn = 3;

      }
      if ((block[j][0].state === 2 && block[j][1].state === 2 &&
          block[j][2].state === 2) || (block[0][i].state === 2 && block[1][i].state === 2 &&
          block[2][i].state === 2) || (block[0][0].state === 2 && block[1][1].state === 2 &&
          block[2][2].state === 2) || (block[2][0].state === 2 && block[1][1].state === 2 &&
          block[0][2].state === 2)) {
        textAlign(CENTER);
        textSize(32);
        fill(0, 0, 240);
        text("Blue Wins", block[0][1].getx(), 600);
        turn = 3;

      }
    }
  }
  console.log(turn);
}

function mousePressed() {
  if (turn < 3) {
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (dist(mouseX, mouseY, block[j][i].getx(), block[j][i].gety()) < 50 &&
          block[j][i].state === 0) {
          switch (turn) {
            case 0:
              turn = 2;
              block[j][i].state = 1;
              console.log(block[j][i].state);
              break;
            case 1:
              turn = 2;
              block[j][i].state = 1;
              console.log(block[j][i].state);
              break;

            case 2:
              turn = 1;
              block[j][i].state = 2;
              console.log(block[j][i].state);
              break;

            default:
              break;
          }
        }
      }
    }
  }
}