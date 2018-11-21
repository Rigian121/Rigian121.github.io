var buggie1, buggie2, buggie3

function setup() {
  createCanvas(300,300);
  frameRate(30)
  buggie1 = new buggie(80, 80, 10, 20, 1, 1, 2, 80)
  buggie2 = new buggie(200, 200, random(3, 20), random(5, 30), 2, 2, 3, random(0, 255))
  buggie3 = new buggie(60, 250, 5, 20, 3, 3, 5, 150)
}
function draw() {
  background(170);
  rect(20, 20, 260, 260)
  buggie1.show();
  buggie1.move();
  buggie2.show();
  buggie2.move();
  buggie3.show();
  buggie3.move();
}

class buggie{
 constructor(x,y, bodyWidth, bodyLength, xSpeed, ySpeed, skitter, bodyShade){
  this.x = x;
  this.y = y;
  this.bodyWidth = bodyWidth
  this.bodyLength = bodyLength
  this.bodyShade = bodyShade
  this.xSpeed = xSpeed
  this.ySpeed = ySpeed
  this.skitter = skitter
}

 show(){
  fill(this.bodyShade)
  ellipse(this.x, this.y, this.bodyWidth, this.bodyLength)
  ellipse(this.x, this.y-this.bodyLength/2, this.bodyWidth/1.5, this.bodyWidth/1.5)
  line(this.x+this.bodyWidth/2, this.y, this.x+this.bodyWidth, this.y-this.bodyWidth/4)
  line(this.x+this.bodyWidth, this.y-this.bodyWidth/4, this.x+this.bodyWidth*1.5, this.y-this.bodyWidth)
  line(this.x-this.bodyWidth/2, this.y, this.x-this.bodyWidth, this.y-this.bodyWidth/4)
  line(this.x-this.bodyWidth, this.y-this.bodyWidth/4, this.x-this.bodyWidth*1.5, this.y-this.bodyWidth)
  line(this.x+this.bodyWidth/2.35, this.y+this.bodyLength/4, this.x+this.bodyWidth, this.y+this.bodyWidth/2)
  line(this.x+this.bodyWidth, this.y+this.bodyWidth/2, this.x+this.bodyWidth*1.5, this.y+this.bodyWidth)
  line(this.x-this.bodyWidth/2.35, this.y+this.bodyLength/4, this.x-this.bodyWidth, this.y+this.bodyWidth/2)
  line(this.x-this.bodyWidth, this.y+this.bodyWidth/2, this.x-this.bodyWidth*1.5, this.y+this.bodyWidth)
  }

  move(){
    if((this.x < 280) && (this.x > 20) && (this.y < 280) && (this.y > 20)){
    this.x = this.x + this.xSpeed + random (-this.skitter, this.skitter);
  	this.y = this.y + this.ySpeed + random (-this.skitter, this.skitter);
  }
  else{
    this.x = this.x + this.xSpeed;
    this.y = this.y + this.ySpeed;
  }
    if ((this.x > 290) || (this.x < 10) || (this.unpredictability > 99)) {
      this.xSpeed = this.xSpeed * -1;
    }
    if ((this.y > 290) || (this.y < 10) || (this.unpredictability > 99)) {
      this.ySpeed = this.ySpeed * -1;
    }
  }
}
