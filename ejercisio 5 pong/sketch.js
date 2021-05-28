let left = new Bar(50,250);
let rite = new Bar(950,250);
let ball = new Ball(500,250);
function setup() {
  createCanvas(1000, 500);
}

function draw() {

  background(220);
  left.draw();
  rite.draw();
  ball.draw();


}
