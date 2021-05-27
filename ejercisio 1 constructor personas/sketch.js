persona=new Persona(100,100,"amarilla","sombrero","enfadado","azules");
persona2=new Persona(250,100,"verde","mal","serio","verdes");
persona3=new Persona(100,300,"naranja","marge","triste","rojos");
persona4=new Persona(250,300,"roja","sombrero","serio","azules");
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  persona.draw();
  persona2.draw();
  persona3.draw();
  persona4.draw();
}
//intenté haecer un array list que aleatorizara las caracteristicas pero el juego con
//strings y numeros resulto muy complicado