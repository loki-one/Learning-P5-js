function setup() {
    createCanvas(600,400);
}

function draw() {
    background(0);
    for(var x = 0;x<=width;x+=50){
      for(var y=0;y<=height;y+=50){
        if((y===0 || y===100 || y===200 || y===300 || y===400) &&(x===50  || x===150 || x===250 || x===350 || x === 450 || x === 550)) {
          fill(0);
        }else if((y===50 || y === 150 || y===250||y===350) &&(x===0  || x===100 || x===200 || x===300 || x === 400 || x === 500)){
          fill(0);
        }else{
          fill(255);
        }
        rect(x,y,50,50);
      }
    }
}
