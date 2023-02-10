function setup() {
  createCanvas(600, 600);
  background(255)
  stroke(255)
}

function draw() {
 //background(255,20);
    strokeWeight(weighting2())
    stroke(50,70,weighting3())
    point(weighting1(),weighting1()); 
}

function weighting1(){
  let x = random(1);
  if(x > .98){
    x = random(width*7/8,width);
  } else if(x > .90){
    x = random(width*6/8,width*7/8);
  } else if(x > .75){
    x = random(width*5/8,width*6/8);
  } else if(x > .5){
    x = random(width*4/8,width*5/8);
  } else if(x > .25){
    x = random(width*3/8,width*4/8);
  } else if(x > .10){
    x = random(width*2/8,width*3/8)
  } else if(x > .02){
    x = random(width*1/8,width*2/8)
  } else {
    x = random(0,width/8)
  }
  return int(x);
}

function weighting2(){
    let x = random(1);
  if(x > .99){
    x = random(30,40)
  } else if(x > .94){
    x = random(10,30)
  } else if(x > .79){
    x=random(5,10)
  } else {
    x=random(1,5)
  }
  return int(x);
}

function weighting3(){
  let x = random(1);
  if(x > .98){
    x = random(200,255)
  } else if(x > .90){
    x = random(170,200)
  } else if(x > .75){
    x = random(140,170)
  } else if(x > .5){
    x = random(110,140)
  } else if(x > .25){
    x = random(80,110)
  } else if(x > .10){
    x = random(50,80)
  } else if(x > .02){
    x = random(20,50)
  } else {
    x = random(20)
  }
  return int(x);
}
