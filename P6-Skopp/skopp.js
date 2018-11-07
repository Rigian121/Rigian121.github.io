var sloth;
var owl;

function preload() {
sloth = loadImage('assets/sloth.png')
owl = loadImage('assets/owl.png')
}

function setup() {
  createCanvas(600,600);
  background(255,200,0);
}

function draw(){
background(0);
  imageMode(CENTER)
  fill(200)
  rect(mouseX, 30, 100, 20)
}
