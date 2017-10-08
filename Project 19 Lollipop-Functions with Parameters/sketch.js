function setup(){
    createCanvas(600,400);
}

function draw(){
    background(0);
    lolipop(200,100,50);
    lolipop(300,200,100);
    lolipop(400,100,50);
}

function lolipop(x,y,diameter){
  fill(0,200,255);
  rect(x-10,y,20,150);

  fill(255,0,200);
  ellipse(x,y,diameter,diameter);
}
