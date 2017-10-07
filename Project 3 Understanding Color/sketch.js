function setup() {
    createCanvas(450,450);
    background(50,50,50);
}

function draw() {
  /*Fourth argument in fill is transparency*/
  noStroke(); //To omit outlines or borders
  //Roof
  fill(0,0,255);
  triangle(225,150,200,200,250,200);
  //body
  fill(255,0,0);
  rect(200,200,50,50);
  //drawing a door
  fill(0,255,0);
  rect(220,220,15,30);
}
