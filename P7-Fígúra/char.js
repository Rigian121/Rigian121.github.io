function setup() {
  createCanvas(300,300);
}
function draw() {
  background(255);
  Spodder(80, 80, 50, 70, 0, 80)
  Spodder(200, 200, 30, 20, 0, 200)
}

function Spodder(x,y, bodyWidth, bodyLength, legLength, bodyShade){
  fill(bodyShade)
  ellipse(x, y, bodyWidth, bodyLength)
  ellipse(x, y-bodyLength/2, bodyWidth/1.5, bodyWidth/1.5)
  line(x+bodyWidth/2, y, x+bodyWidth, y-bodyWidth/4)
  line(x+bodyWidth, y-bodyWidth/4, x+bodyWidth*1.5, y-bodyWidth)
  line(x-bodyWidth/2, y, x-bodyWidth, y-bodyWidth/4)
  line(x-bodyWidth, y-bodyWidth/4, x-bodyWidth*1.5, y-bodyWidth)
}
