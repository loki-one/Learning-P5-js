var spot = {
  x:0,
  y:200
};

var col = {
  r: 255,
  g: 0,
  b: 0
}

function setup() {
    createCanvas(600,400);
    background(0);
}

function draw() {
  spot.x = random(0,width);
  spot.y = random(0,height);
  col.r = random(100,col.r);
  col.b = random(100,col.b);
  noStroke();
  fill(col.r,0,col.b,100);
  ellipse(spot.x,spot.y,25,25);
}
