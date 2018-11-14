var x = 100;
var y = 100;
var xSpeed = 6;
var ySpeed = 6;
var spadiX = 300
var spadiBreidd = 100;
var spadiThykkt = 20;
var score = 0;
var lives = 2

function setup() {
  createCanvas(600,600);
}

function draw() {
background(0);
  rectMode(CENTER)
  rect(80,250,10,600)
  rect(510,250,10,600)
  fill(255)
  rect(mouseX, 470, spadiBreidd, spadiThykkt)
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
  if (y < 10) {
    ySpeed = ySpeed * -1;
  }
  if (y < 471){
    if ((y > 450) && (mouseX < x + spadiBreidd/2) && (mouseX > x - spadiBreidd/2)) {
      ySpeed = ySpeed * -1
      score = score + 1
    }
    if ((y > 450) && (mouseX < x) && (mouseX > x - spadiBreidd/4)) {
      xSpeed = 6
      ySpeed = -8
    }
    if ((y > 450) && (mouseX < x - spadiBreidd/4) && (mouseX > x - spadiBreidd/2)) {
      xSpeed = 8
      ySpeed = -4
    }
    if ((y > 450) && (mouseX < x + spadiBreidd/4) && (mouseX > x)) {
      xSpeed = -6
      ySpeed = -8
    }
    if ((y > 450) && (mouseX < x + spadiBreidd/2) && (mouseX > x + spadiBreidd/4)) {
      xSpeed = -8
      ySpeed = -4
    }
  }
  if (y > 610 && lives >= 0){
    lives = lives - 1
    x = 100
    y = 100
  }
  if(lives == -1){
    text("Game Over", 270, 300)
    y = 611
  }
  //if ((y < 470) && (y > 450) && (mouseX = x - spadiBreidd/2) && (mouseX = x + spadiBreidd/2)) {
    //xSpeed = xSpeed * -1;
  //}
	text("Score: " + score,10,20);
  text("Lives: " + lives, 10, 40)
}
