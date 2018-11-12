var x = 100;
var y = 100;
var xSpeed = 6;
var ySpeed = 4;
var spadiX = 300
var spadiBreidd = 100;
var score = 0;

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
  rect(mouseX, 470, spadiBreidd, 20)
  rect(x, y, 20, 20)
  x = x + xSpeed
  y = y + ySpeed
  if (mouseX > 455){
    mouseX = mouseX - mouseX + 455
  }
  if(mouseX < 135){
    mouseX = 135
  }
  if ((x > 490) || (x < 100)) {
    xSpeed = xSpeed * -1;
  }
  if ((y > 590) || (y < 10)) {
    ySpeed = ySpeed * -1;
  }
  if (y < 471){
    if ((y > 450) && (mouseX < x + spadiBreidd/2) && (mouseX > x - spadiBreidd/2)) {
      ySpeed = ySpeed * -1
      score = score + 1
    }
    if ((y > 450) && (mouseX < x) && (mouseX > x - spadiBreidd/4)) {
      xSpeed = 3
      ySpeed = -4
    }
    if ((y > 450) && (mouseX < x - spadiBreidd/4) && (mouseX > x - spadiBreidd/2)) {
      xSpeed = 6
      ySpeed = -2
    }
    if ((y > 450) && (mouseX < x + spadiBreidd/4) && (mouseX > x)) {
      xSpeed = -3
      ySpeed = -4
    }
    if ((y > 450) && (mouseX < x + spadiBreidd/2) && (mouseX > x + spadiBreidd/4)) {
      xSpeed = -6
      ySpeed = -2
    }
  }
  //if ((y < 470) && (y > 450) && (mouseX = x - spadiBreidd/2) && (mouseX = x + spadiBreidd/2)) {
    //xSpeed = xSpeed * -1;
  //}
}
