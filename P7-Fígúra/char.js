function setup() {
  createCanvas(300,300);
  frameRate(2)
}
function draw() {
  background(255);
  Bug(80, 80, 50, 70, 0, 80)
  Bug(200, 200, random(10,100), random(30,130), 0, random(0,255))
}

function Bug(x,y, bodyWidth, bodyLength, legLength, bodyShade){
  fill(bodyShade)
  ellipse(x, y, bodyWidth, bodyLength)
  ellipse(x, y-bodyLength/2, bodyWidth/1.5, bodyWidth/1.5)
  line(x+bodyWidth/2, y, x+bodyWidth, y-bodyWidth/4)
  line(x+bodyWidth, y-bodyWidth/4, x+bodyWidth*1.5, y-bodyWidth)
  line(x-bodyWidth/2, y, x-bodyWidth, y-bodyWidth/4)
  line(x-bodyWidth, y-bodyWidth/4, x-bodyWidth*1.5, y-bodyWidth)
}
