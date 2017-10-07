var r = 0;
var b = 255;
var square = {
  x:0,
  y:200,
  side:40
};
function setup() {
    createCanvas(600,400);
}

function draw() {
  /*map function to map current values min to max x coordinate to canvas to
  min to max target values of black to white color*/
  r = map(mouseX, 0, 600, 0, 255);
  b = map(mouseX, 0, 600, 255, 0);
  //background
  background(r, 0, b);
  //ellipse
  fill(250,118,222);
  rect(mouseX,square.y,square.side,square.side);
}
