var col = {
  r: 250,
  g: 250,
  b: 100
}
function setup() {
    createCanvas(600,400);
    background(col.r,col.g,col.b);
}

function draw() {
  noStroke();
  fill(255,180,200,100);
  ellipse(mouseX,mouseY,25,25);
}

function mousePressed() {
  col.r = random(100,250);
  col.g = random(100,250);
  background(col.r,col.g,col.b);
}
