function setup() {
    createCanvas(450,450);
    background(50,50,50);
}

function draw() {
  /*Fourth argument in fill is transparency*/
  noStroke(); //To omit outlines or borders
  //Sun
  fill(255,255,0);
  ellipse(100,50,50,50);
  //Roof
  fill(0,0,255);
  triangle(225,150,200,200,250,200);
  //Body
  fill(255,0,0);
  rect(200,200,50,50);
  //Door
  fill(0,255,0);
  rect(220,220,15,30);
  //Grass
  fill(0,80,0);
  rect(0,250,600,350);
}
