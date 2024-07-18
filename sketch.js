let xPos= 250
let yPos= 250
let marioImage;

function preload(){
    marioImage = loadImage("https://en.wikipedia.org/wiki/Mario#/media/File:MarioNSMBUDeluxe.png")
}

function setup() {
  createCanvas(500, 500);
  noStroke();
  rectMode(CENTER)

  
}

function draw() {
  background(0);
  fill(255,0,0)
  //rect(xPos,yPos,25,25)
  image(marioImage,xPos,yPos,50,50)
  if(keyIsDown(LEFT_ARROW)){
    xPos+= -2
  }
  if(keyIsDown(RIGHT_ARROW)){
    xPos+=2
  }
  if(keyIsDown(UP_ARROW)){
    yPos+=-2
  }
  if(keyIsDown(DOWN_ARROW)){
    yPos+=2
  }
  if(xPos>486){
    xPos=486
  }
  if(xPos < 14){
    xPos=14
  }
  if(yPos>486){
    yPos=486
  }
  if(yPos < 14){
    yPos=14
  }
}
