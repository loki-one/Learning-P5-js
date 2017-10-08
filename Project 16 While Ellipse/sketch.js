function setup() {
    createCanvas(600,400);
}

function draw() {
    background(0);
    var x = 0;
    while(x <= width){
      fill(255,200,0);
      ellipse(x,100,25,25);
      x = x+50;
    }
    var r = 0;
    for(var x = 0;x<=width;x+=50){
      r = map(x,0,600,0,255);
      fill(r,0,200);
      ellipse(x,200,25,25);
    }
}
