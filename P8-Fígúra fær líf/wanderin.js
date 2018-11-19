function setup() {
  createCanvas(300,300);
  frameRate(2)
}
function draw() {
  background(255);
  Buggie(80, 80, 50, 70, 80)
  Buggie(200, 200, random(10, 50), random(50, 80), random(0, 255))
}

function Buggie(x,y, bodyWidth, bodyLength, bodyShade){
  fill(bodyShade)
  ellipse(x, y, bodyWidth, bodyLength)
  ellipse(x, y-bodyLength/2, bodyWidth/1.5, bodyWidth/1.5)
  line(x+bodyWidth/2, y, x+bodyWidth, y-bodyWidth/4)
  line(x+bodyWidth, y-bodyWidth/4, x+bodyWidth*1.5, y-bodyWidth)
  line(x-bodyWidth/2, y, x-bodyWidth, y-bodyWidth/4)
  line(x-bodyWidth, y-bodyWidth/4, x-bodyWidth*1.5, y-bodyWidth)
  line(x+bodyWidth/2.35, y+bodyLength/4, x+bodyWidth, y+bodyWidth/2)
  line(x+bodyWidth, y+bodyWidth/2, x+bodyWidth*1.5, y+bodyWidth)
  line(x-bodyWidth/2.35, y+bodyLength/4, x-bodyWidth, y+bodyWidth/2)
  line(x-bodyWidth, y+bodyWidth/2, x-bodyWidth*1.5, y+bodyWidth)
}
