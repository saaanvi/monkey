var monkey , monkey_running
var bananaImage, obstacle, obstacleImage,banana;
var FoodGroup, obstacleGroup
var score
var PLAY=0;
var END = 1;
var gameState = 0;
var ground;
var survivalTime=0
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas (600,600);
monkey = createSprite (72,223,20,20);
  monkey.addAnimation ("running",monkey_running);
  monkey.scale = 0.13;
  
  ground = createSprite (182,262,600,10);
 
  bananaGroup = new Group();
  obstacleGroup = new Group ();

}


function draw() {
background ("white");
  text(mouseX+","+mouseY,mouseX,mouseY);
  
  
  
  if (gameState===PLAY) {
      
      
  
   if(keyDown("r") && monkey.y >200) {
      monkey.velocityY = -20;
    }
  
    monkey.velocityY = monkey.velocityY + 0.8
  
  monkey.collide(ground);
   
  
  if (bananaGroup.isTouching(monkey)){
    console.log("b")
    bananaGroup.destroyEach();
    
  }
    if (obstacleGroup.isTouching(monkey)){
      console.log("stone")
      gameState = END;
    }
  }
      
  if (gameState===END){
   
    monkey.destroy();
    bananaGroup.destroyEach();
    obstacleGroup.destroyEach();
    textSize (25);
    fill ("red");
    text ("GAME OVER",300,300);
    
  }
  survivalTime=0
  stroke("white")
  textSize(20)
  fill("white")
  text("Score:"+score,500,50)
  
  stroke("black")
  textSize(20);
  fill("black")
  survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time:"+survivalTime,100,50)
  
  drawSprites();
  
  spawnBanana();
  spawnObstacle();
  
  
}

function spawnBanana(){
  if (frameCount % 100 === 0){
   banana=createSprite(163,105);
  banana.addImage (bananaImage);
  banana.scale = 0.1;
    banana.y = Math.round(random(163,105));
    banana.velocityX = -4;
    banana.lifetime = 100;
    
    bananaGroup.add(banana);
}
}

function spawnObstacle(){
  if (frameCount % 150 === 0){
   var obstacle = createSprite (500,232,20,20);
  obstacle.addImage (obstaceImage);
  obstacle.scale = 0.2;
 obstacle.velocityX = -3;
  obstacle.lifetime = 210;
    
    obstacleGroup.add(obstacle);
}
}












