ej = new Shield (100,500);
ej2 = new Shot (100,400);
ej3 = new Alien (500,100,5);
function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(220);
  ej.draw();
  ej2.draw();
  ej3.draw();
}
