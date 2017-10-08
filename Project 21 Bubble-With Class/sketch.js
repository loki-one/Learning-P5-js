var bubble;

function setup(){
    createCanvas(600,400);
    bubble1 = new Bubble();
    bubble2 = new Bubble();
    bubble3 = new Bubble();
}

function draw(){
    background(0);
    bubble1.show();
    bubble1.move();
    bubble2.show();
    bubble2.move();
    bubble3.show();
    bubble3.move();
}

class Bubble {
  constructor(){
    this.x = 300;
    this.y = 200;
  }

  move(){
    this.x = this.x + random(-1,1);
    this.y = this.y + random(-1,1);
  }

  show(){
    stroke(0,0,255);
    strokeWeight(3);
    noFill();
    ellipse(this.x,this.y,25,25);
  }
}
