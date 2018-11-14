function setup() {
  createCanvas(400,400);
  rectMode(CENTER);
  background(255,200,0);
}
function draw() {
  mynd(75,255);
  mynd(95,245);
  mynd(115,235);
  mynd(135,225);
  mynd(155,215);
  mynd(175,205);
  mynd(195,195);
  mynd(215,185);
  mynd(235,175);
  mynd(255,165);
  mynd(275,155);
  mynd(295,145);
  mynd(315,135);
  mynd(335,125);
  mynd(355,115);
  mynd(375,105);
  mynd(395,95);
}

// Teiknar einfalda mynd.
// stærð: stjórnar stærð myndarinnar
// litur: stjórnar litnum á myndinni.
function mynd(stærð,litur){
  noFill();
  strokeWeight(2);
  stroke(litur);
  rect(200,200,stærð,stærð);
  ellipse(200,200,stærð,stærð);
}
