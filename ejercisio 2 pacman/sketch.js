bola = new Bola(50,50);
pac = new Pac (300,300);

function setup() {
  createCanvas(600, 600);
  fantasma = new Fantasma (random(100,500),random(100,500)); 
}

function draw() {
  background(20);
  bola.draw();
  fantasma.draw();
  pac.draw();
}
