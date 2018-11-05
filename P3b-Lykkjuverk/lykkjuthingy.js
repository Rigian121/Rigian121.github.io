function setup() {
  createCanvas(300,300);
  background(0);
  fill(0);
  frameRate(5);
}

function draw(){
background(0);
    for(var f = 0; f < 14; f = f + 1) {
      fill(0, 210, 0);
      rect(10, 10 + f*20, 15, 15);
    for(var g = 0; g < random(0, 20); g = g + 1)
      rect(10 + g*20, 10 + f*20, 15, 15);
if(g > 5)
      fill(210, 210, 0);
      rect(10 + g*20, 10 + f*20, 15, 15);
if(g > 10)
      fill(210, 0, 0);
      rect(30 + g*20, 10 + f*20, 15, 15);
  }
}
