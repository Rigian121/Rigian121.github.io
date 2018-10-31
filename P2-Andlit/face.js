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
  fill(facecolourr, facecolourg, facecolourb);
  ellipse(x, y, faceWidth, faceHeight);
  fill(255)
  ellipse(eyex, eyey, eyeSize, eyeSize)
  ellipse(eyex+eyedist, eyey, eyeSize, eyeSize)
  fill(30)
  ellipse(eyex+eyedist, eyey, eyeSize-5, eyeSize-5)
  ellipse(eyex, eyey, eyeSize-5, eyeSize-5)
  ellipse(eyex+20, y+30, faceWidth-70, faceHeight-130)

  //.....k��i sem sta�setur augun m.v. x, y, faceWidth og faceHeight �tti a� koma h�r.

}

function mousePressed(){
  //� hvert sinn sem m�sinni er smellt f� breyturnar n� gildi.
  faceWidth  = random(75,  150);
  faceHeight = random(100, 200);
  eyeSize    = random(5,  30);
  eyex       = random(100, 160);
  eyey       = random(125, 145);
  eyedist    = random(30, 50)
  facecolourb = random(70, facecolourr-70)
  facecolourg = random(90, facecolourr-50)
  facecolourr = random(150, 200)
}
