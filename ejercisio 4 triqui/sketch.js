let cuadro = [];
for (let j = 0; j < 3; j++) {
cuadro.push(new Array (3));
    }

for (let index = 0; index < 3; index++) {
  for (let j = 0; j < 3; j++) {
cuadro[j][index]= new Cuadro(150+(150*index),150+(150*j),1);
console.log(cuadro[index][j]);
console.log(index,j);
  }
}
function setup() {
  createCanvas(700, 700);
}

function draw() {
  background(220);
  for (let index = 0; index < 3; index++) {
    for (let j = 0; j < 3; j++) {
    cuadro[j][index].draw();
    }
    }

}
