var bubble;

function setup(){
    createCanvas(600,400);
    bubble1 = new Bubble(300,200,25);
    bubble2 = new Bubble(100,200,50);
    bubble3 = new Bubble(400,300,100);
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
  constructor(x,y,r){
    this.x = x;
    this.y = y;
    this.r = r;
  }

  move(){
    this.x = this.x + random(-1,1);
    this.y = this.y + random(-1,1);
  }

  show(){
    stroke(0,0,255);
    strokeWeight(3);
    noFill();
    ellipse(this.x,this.y,this.r * 2);
  }
}
