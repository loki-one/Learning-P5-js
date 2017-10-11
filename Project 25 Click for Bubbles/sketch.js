var bubbles = [];

function setup(){
  createCanvas(600,400);
}

function draw(){
  background(0);
  for(var i=bubbles.length-1;i>0;i--){
    bubbles[i].show();
    bubbles[i].move();
    if(bubbles[i].isFinished()){
      bubbles.splice(i,1);
    }
  }
}

function mousePressed(){
    bubbles.push(new Bubble(mouseX,mouseY));
}
