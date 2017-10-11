function Bubble(x,y){
  this.x = x;
  this.y = y;
  this.lifespan = 255;
  this.r = random(10,18);

  this.move = function(){
    this.x += random(-1,1);
    this.y += random(-1,1);
    this.lifespan--;
  }

  this.isFinished = function(){
      if(this.lifespan < 0){
        return true;
      }
  }

  this.show = function(){
    noStroke();
    fill(255,255,255,this.lifespan);
    ellipse(this.x,this.y,this.r);
  }
}
