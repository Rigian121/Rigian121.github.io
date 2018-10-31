function setup() {
  createCanvas(300,300);
  background(255, 215, 0);
  fill(0);
  colorMode(HSB);
  frameRate(2);
}

function draw(){
  for(var i = 0; i < 15; i = i + 1) {
    fill(random(0, 360), 75,100);
    ellipse(10, 10 + i*20, 7, 7);
  for(var o = 0; o < random(0, 30); o = o + 1)
    ellipse(10 + o*20, 10 + i*20, 7, 7);
  }
}
