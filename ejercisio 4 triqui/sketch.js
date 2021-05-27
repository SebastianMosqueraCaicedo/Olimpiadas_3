let block = [];
for (let j = 0; j < 3; j++) {
  block.push(new Array(3));
}
let turn = 0; //so that every time a square is changed, the next is the opposite

for (let index = 0; index < 3; index++) {
  for (let j = 0; j < 3; j++) {
    block[j][index] = new Cuadro(150 + (150 * index), 150 + (150 * j), 0);
    console.log(block[index][j]);
    console.log(index, j);
  }
}

function setup() {
  createCanvas(700, 700);
}

function draw() {
  background(220);
  for (let index = 0; index < 3; index++) {
    for (let j = 0; j < 3; j++) {
      block[j][index].draw();
    }
  }

}

function mousePressed() {
  for (let index = 0; index < 3; index++) {
    for (let j = 0; j < 3; j++) {
      if (dist(mouseX, mouseY, block[j][index].getx(), block[j][index].gety()) < 50 
      && block[j][index].state === 0) {
        switch (turn) {
          case 0:
            turn = 2;
            block[j][index].state = 1;
            console.log(block[j][index].state);
            break;

          default:
            break;
        }
      }
    }
  }
}