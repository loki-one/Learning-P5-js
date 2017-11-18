var balls = [];

function setup(){
  createCanvas(600,400);
}

function draw(){
  background(0);
  for(var i=0;i<balls.length;i++){
    balls[i].show();
    balls[i].move();
    if(balls[i].y >= 400){
      balls[i].y = 400;
    }
  }
}

function mouseDragged(){
  balls.push(new Balls(mouseX,mouseY,16));
}

function Balls(x,y,r){

  this.x = x;
  this.y = y;
  this.r = r;

  this.show = function(){
    noStroke();
    var r = random(180,255);
    var b = random(180,240);
    fill(r,0,b,180);
    ellipse(this.x,this.y,this.r);
  }

  this.move = function(){
    //this.y += 5;
    this.x += random(-1,1);
    this.y += random(-1,1);
  }

}
