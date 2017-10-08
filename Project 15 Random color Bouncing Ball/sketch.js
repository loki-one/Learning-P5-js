var on = false;
var x = 0;
var speed = 2;
var ellipCol = {
  r: 255,
  g: 200,
  b: 0
};
function setup() {
    createCanvas(600,400);
}

function draw() {
    background(0);
    stroke(255);
    strokeWeight(3);
    noFill();
    if(mouseX > 275 && mouseX < 325 && mouseY > 275 && mouseY < 325){
        fill(255,0,200);
    }
    rectMode(CENTER);
    rect(300,300,50,50);
    noStroke();

    if(on){
        ellipCol.r = random(0,255);
        ellipCol.g = random(0,255);
        ellipCol.b = random(0,255);
    }else{
        ellipCol.r = 255;
        ellipCol.g = 200;
        ellipCol.b = 0;
    }

    fill(ellipCol.r, ellipCol.g, ellipCol.b);
    ellipse(x,200,25,25);

    if(x > width|| x < 0){
      speed = speed * -1;
    }

    x = x + speed;
}

function mousePressed(){
    if(mouseX > 275 && mouseX < 325 && mouseY > 275 && mouseY < 325){
        on = !on;
    }
}
