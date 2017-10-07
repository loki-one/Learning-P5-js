function setup() {
    createCanvas(600,600);
    background(255,0,0);
}

function draw() {
  //drawing a rectangle
  rect(300,300,20,20);
  //drawing a line
  line(200,380,400,380);
  //drawing a triangle
  triangle(200,200,100,350,300,350);
  //drawing an arc
  arc(100,100,100,100,0,HALF_PI);
}
