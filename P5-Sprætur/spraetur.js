var sloth;
var owl;

function preload() {
sloth = loadImage('assets/sloth.png')
owl = loadImage('assets/owl.png')
}

function setup() {
  createCanvas(600,300);
  background(255,200,0);
}

function draw(){
background(0);
  imageMode(CENTER)
  if(mouseX < 300){
    image(owl, mouseX, mouseY)
  }
  if(mouseX > 300){
    image(sloth, mouseX, mouseY)
  }
}
