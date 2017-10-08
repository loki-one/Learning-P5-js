var bubble = {
  x: 300,
  y: 200,
  move: function(){
    this.x = this.x + random(-1,1);
    this.y = this.y + random(-1,1);
  },
  display: function(){
    stroke(0,0,255);
    strokeWeight(3);
    noFill();
    ellipse(this.x,this.y,25,25);
  }
}
function setup(){
    createCanvas(600,400);
}

function draw(){
    background(0);
    bubble.display();
    bubble.move();
}
