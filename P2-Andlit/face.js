var faceWidth = 100;
var faceHeight = 150;
var x = 150;
var y = 150;
var eyeSize = 20;
var eyex = 150;
var eyey = 150;

function setup(){
  createCanvas (300,300);
}

function draw(){
  background(180);
  ellipse(x, y, faceWidth, faceHeight);
  ellipse(eyex, eyey, eyeSize, eyeSize)
  ellipse(eyex+40, eyey, eyeSize, eyeSize)
  //.....k��i sem sta�setur augun m.v. x, y, faceWidth og faceHeight �tti a� koma h�r.

}

function mousePressed(){
  //� hvert sinn sem m�sinni er smellt f� breyturnar n� gildi.
  faceWidth  = random(75,  150);
  faceHeight = random(100, 200);
  eyeSize    = random(10,  30);
  eyex       = random(140, 160);
  eyey       = random(145, 155);
}
