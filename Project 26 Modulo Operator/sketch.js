function setup(){
  createCanvas(600,400);
}

function draw(){
  background(255);
  for(var i=0;i<width;i++){
    var y = i % 50;
    line(i,0,i,y);
  }

  var x = frameCount % 600;
  fill(255,200,200);
  ellipse(x, height/2, 50,50);

  for(var i=0;i<width;i++){
    var y = 350 * (i % 50);
    line(i,400,i,y);
  }

  for(var i=0;i<width;i++){
    var y = 350 + (i % 50);
    line(i,400,i,y);
  }

  /*for(var i=0;i<8;i++){
    if(i%2 === 0){
      fill(255);
    }else{
      fill(0);
    }
    rect(i*50,height/2,50,50);
  }*/

}
