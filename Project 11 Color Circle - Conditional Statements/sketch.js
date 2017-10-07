function setup() {
    createCanvas(600,400);
}

function draw() {
  background(0);
  stroke(255);
  strokeWeight(3);
  noFill();
  //fill(255,0,200);
  if(mouseX > 300){
    fill(255,0,200);
  }

  if(mouseX > 500){
    rect(300,200,50,50);
    rect(300,150,50,50);
    rect(250,200,50,50);
    rect(250,150,50,50);
  }

  ellipse(300,200,50,50);
}
