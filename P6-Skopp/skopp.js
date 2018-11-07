var x = 100;
var y = 100;
var xSpeed = 6;
var ySpeed = 4;
var points = 0;

function setup() {
  createCanvas(600,600);
  background(0);
}

function draw() {
background(0);
  rectMode(CENTER)
  rect(80,250,10,600)
  rect(510,250,10,600)
  fill(255)
  rect(mouseX, 470, 100, 20)
  rect(x, y, 20, 20)
  x = x + xSpeed
  y = y + ySpeed
  if ((x > 490) || (x < 100)) {
    xSpeed = xSpeed * -1;
  }
  if ((y > 590) || (y < 10)) {
    ySpeed = ySpeed * -1;
  }
  if ((y > 450) && (mouseX < x + 50) && (mouseX > x - 50)) {
    ySpeed = ySpeed * -1
  }
}
