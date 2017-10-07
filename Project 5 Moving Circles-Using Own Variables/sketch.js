var circleX = 0;

function setup() {
    createCanvas(600,400);
}

function draw() {
  //background
  background(250,250,100);
  //ellipse
  fill(250,200,200);
  ellipse(circleX,200,40,40);

  //to make circle move in x direction
  circleX = circleX + 2;
}
