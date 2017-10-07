function setup() {
    createCanvas(600,600);
    background(0);
}

function draw() {
  //To omit outlines or borders
  noStroke();
  //Fourth argument in fill is transparency
  fill(128,0,128,150);
  rect(mouseX,mouseY,25,25);
}

/*Clicking the mouse will reset the canvas i.e. add new background */
function mousePressed() {
  background(0);
}
