ej = new Shield (100,500);
ej2 = new Shot (100,400);
ej3 = new Alien (500,100,5);
ej4 = new Alien (200,100,5);
ej5 = new Alien (50,100,5);
function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(220);
  ej.draw();
  ej2.draw();
  ej3.draw();
  ej4.draw();
  ej5.draw();
}
