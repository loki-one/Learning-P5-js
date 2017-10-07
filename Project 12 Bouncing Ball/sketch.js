var x = 0;
var speed = 3;

function setup() {
    createCanvas(600,400);
}

function draw() {
    background(0);
    noStroke();
    fill(255,0,200);
    ellipse(x,200,30,30);

    if(x > width){
      speed = -3;
    }else if(x < 0) {
      speed = 3;
    }

    x = x+speed;
}
