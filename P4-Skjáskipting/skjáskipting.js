function setup() {
  createCanvas(300,300);
  background(0);
  fill(0);
  rectMode(CENTER)
  frameRate(24)
}

function draw(){
background(0);
  if(mouseX > 150 && mouseY > 150){
    fill(255);
    rect(mouseX, mouseY, random(5,20), random(5,20));
    ellipse(mouseX-10, mouseY-20, random(5, 15), random(3, 6));
    ellipse(mouseX+10, mouseY-20, random(3,11), random(5,10))
}
  if(mouseX > 225 && mouseY < 150){
    fill(random(150,255), random(150,255), random(150,255))
      for(var i = 1; i < 5; i = i+1) {
        ellipse(random(mouseX-20, mouseX+20), random(mouseY-20, mouseY+20), random(5, 20), random(5, 20));
  }
}
  if(mouseX > 150 && mouseX < 225 && mouseY < 150){
    fill(random(150,255), random(150,255), random(150,255))
      for(var o = 1; o < 5; o = o+1) {
        rect(random(mouseX-20, mouseX+20), random(mouseY-20, mouseY+20), random(5, 20), random(5, 20));
    }
  }
}
