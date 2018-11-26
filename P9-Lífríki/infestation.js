var buggies = [];

function setup() {
  createCanvas(300,300);
  for (var b = 0; b < 3; b = b+1){
  buggies[b] = new buggie(random(10,290), random(10,290), random(3,30), random(30, 50), random(-4,4), random(-4,4), random(1,3), random(0,255))
  }
}

function draw() {
  background(170);
  noStroke();
    fill(200)
    rect(20, 20, 260, 260);
  for (var b = 0; b < 3; b = b+1){
  buggies[b].show();
  buggies[b].move();
  }
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
  stroke(0);
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
