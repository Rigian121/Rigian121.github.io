var faceWidth = 100;
var faceHeight = 150;
var x = 150;
var y = 150;
var eyeSize = 20;
var eyex = 150;
var eyey = 150;
var eyedist = 40
var facecolourb = 170
var facecolourg = 212
var facecolourr = 255

function setup(){
  createCanvas (300,300);
}

function draw(){
  background(180);
  fill(facecolourb, facecolourg, facecolourr);
  ellipse(x, y, faceWidth, faceHeight);
  fill(255)
  ellipse(eyex, eyey, eyeSize, eyeSize)
  ellipse(eyex+eyedist, eyey, eyeSize, eyeSize)
  ellipse(x, y+40, faceWidth-50, faceHeight-130)

  //.....k��i sem sta�setur augun m.v. x, y, faceWidth og faceHeight �tti a� koma h�r.

}

function mousePressed(){
  //� hvert sinn sem m�sinni er smellt f� breyturnar n� gildi.
  faceWidth  = random(75,  150);
  faceHeight = random(100, 200);
  eyeSize    = random(10,  30);
  eyex       = random(130, 160);
  eyey       = random(145, 155);
  eyedist    = random(20, 40)
  facecolourb = random(50, 140)
  facecolourg = random(90, 210)
  facecolourr = random(100, 255)
}
