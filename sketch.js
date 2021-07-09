var seaImg 
var shipImg1
var sea 
var ship

function preload(){
    seaImg = loadImage("sea.png");
    shipImg1 = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png");
}

function setup(){
      createCanvas(400,400);
    
      sea = createSprite(400,100);
      sea.addImage("sea", seaImg);
      sea.velocityX = -4;
      sea.scale = 0.5;


      ship = createSprite(130,200,30,30);
      ship.addAnimation("ship", shipImg1)
      ship.scale = 0.3;



}

function draw() {
      background("blue");

      if(sea.x < 0) {
        sea.x = sea.width / 8;
    }

      drawSprites();
  }