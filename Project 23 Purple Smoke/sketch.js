var bubbles = [];

function setup(){
  createCanvas(600,400);
  setInterval(function(){
      for(var i=500;i>0;i--){
        bubbles.push(new Bubble(random(600),380,random(8,16)));
      }
  },1000);
}

function draw(){
  background(0);
  for(var i=0;i<bubbles.length;i++){
    bubbles[i].move();
    bubbles[i].show();
    if(bubbles[i].finished()){
      bubbles.splice(i,1);
    }
  }
}

class Bubble {
  constructor(x,y,r,red,green,blue){
    this.x = x;
    this.y = y;
    this.r = r;
    this.red = red;
    this.green = green;
    this.blue = blue;
    this.vX = random(-1,1);
    this.vY = random(-5,-1);
    this.alpha = 255;
  }

  finished(){
    return this.alpha < 0;
  }

  move(){
    this.x += this.vX;
    this.y += this.vY;
    this.alpha -= 3;
  }

  show(){
    noStroke();
    var r = map(this.y,0,400,0,255);
    var b = map(this.y,0,400,255,0);
    fill(r,0,b,this.alpha);
    ellipse(this.x,this.y,this.r * 2);
  }
}
