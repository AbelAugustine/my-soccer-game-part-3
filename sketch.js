var ball, ballImage;
var boyImage;
var girlImage;
var gameState="start";

function preload(){
     ballImage=loadImage("ball.png");
     boyImage=loadImage("boy.png");
     girlImage=loadImage("girl.png");
     
}

function setup() {
  createCanvas(1500,800);
  
 line1=createSprite(750,50,1500,20);
  line1.shapeColor="white";

  line2=createSprite(750,750,1500,20);
  line2.shapeColor="white";

  line3=createSprite(50,100,20,390);
  line3.shapeColor="white";

  line4=createSprite(1450,100,20,390);
  line4.shapeColor="white";

  line5=createSprite(50,700,20,390);
  line5.shapeColor="white";

  line6=createSprite(1450,700,20,390);
  line6.shapeColor="white";

  cLine=createSprite(750,400,20,800);
  cLine.shapeColor="white";

  ball = createSprite(750,400);
  ball.addImage(ballImage);
  ball.scale = 0.03;
  
  bp1=createSprite(665,101);
  bp1.addImage(boyImage);
  bp2=createSprite(626,397);
  bp2.addImage(boyImage);
  bp3=createSprite(616,690);
  bp3.addImage(boyImage);
  bp4=createSprite(346,121);
  bp4.addImage(boyImage);
  bp5=createSprite(362,399);
  bp5.addImage(boyImage);
  bp6=createSprite(343,694);
  bp6.addImage(boyImage);
  bp7=createSprite(54,395);
  bp7.addImage(boyImage);

  gp1=createSprite(812,95);
  gp1.addImage(girlImage);
  gp2=createSprite(841,395);
  gp2.addImage(girlImage);
  gp3=createSprite(840,687);
  gp3.addImage(girlImage);
  gp4=createSprite(1003,90);
  gp4.addImage(girlImage);
  gp5=createSprite(1018,393);
  gp5.addImage(girlImage);
  gp6=createSprite(1008,686);
  gp6.addImage(girlImage);
  gp7=createSprite(1417,398);
  gp7.addImage(girlImage);
  
}

function draw() {
  background("green");

  push();
  stroke("white");
  strokeWeight(7);
  ellipseMode(CENTER);
  ellipse(750,400,100,100);
  pop();
  
text(mouseX +", "+mouseY,mouseX,mouseY);

if(gameState==="start"){
  start();
}

  drawSprites();
}

function start(){

}