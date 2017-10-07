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

    if(x > width || x < 0){
      speed = speed * -1;
    }

    if(x > 200 && x < 400){
      fill(255,200,0);
      ellipse(x,200,30,30);
    }

    x = x+speed;
}
