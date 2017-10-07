var square = {
  x: 0,
  y: 200,
  side: 40
};

var myColor = {
  r: 218,
  g: 160,
  b: 221
};

function setup() {
    createCanvas(600,400);
}

function draw() {
  //background
  background(myColor.r,myColor.g,myColor.b);
  //ellipse
  fill(250,250,100);
  rect(square.x,square.y,square.side,square.side);

  //to make circle move in x direction
  square.x = square.x + 2;
}
