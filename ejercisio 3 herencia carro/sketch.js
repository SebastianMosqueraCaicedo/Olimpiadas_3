  let carro = new Carro(150,100);
  let carroMoto = new CarroMoto(150,400);
  let carroTaxi = new CarroTaxi(150,700);

  let bus = new Bus(500,100);
let busDoble = new BusDoble(500,400);
let busMio = new BusMio(500,700);

function setup() {
  createCanvas(700, 800);
}

function draw() {
  background(220);
  carro.draw();
  carroMoto.draw();
  carroTaxi.draw();
  bus.draw();
  busDoble.draw();
  busMio.draw();
  carro.draw();
}