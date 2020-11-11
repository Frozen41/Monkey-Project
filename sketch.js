
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var survivalTime
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
 createCanvas(400,400);

monkey = createSprite(60,325);
monkey.addAnimation("monkey_running", monkey_running);
  monkey.scale = 0.2;
  
ground = createSprite(200,390,400,20);
  
  FoodGroup = createGroup();
  obstacleGroup = createGroup();
  
  survivalTime = 0;
 
}


function draw() {
background("lightblue");
  ground.velocityX = -3;
    if(ground.x < 200){
      ground.x = ground.width/2;
    }
  if(keyDown("space")){
    monkey.velocityY = -12;
     }
  monkey.velocityY = monkey.velocityY + 0.4;
  monkey.collide(ground);
  
   stroke("white");
  textSize(20);
  fill("white");
  text("Score: "+ score, 500,50);
  
  stroke("black");  
  textSize(20);
  fill("black");
  survivalTime = Math.ceil(frameCount/frameRate())
text("Survival Time : " + survivalTime, 100, 50);
  
  spawnBananas();
  spawnObstacles();
  
  drawSprites();
}

function spawnBananas() {
  if (frameCount % 80 === 0) {
     banana = createSprite(600,100,40,10);
    banana.y = Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
    
     //assign lifetime to the variable
    banana.lifetime = 134;
    
      
    
   FoodGroup.add(banana);
    
    }
}


function spawnObstacles() {
  if (frameCount % 300 === 0) {
     obstacle = createSprite(500,100,40,10);
    obstacle.y = Math.round(random(370,370));
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.1;
    obstacle.velocityX = -3;
    
     //assign lifetime to the variable
    obstacle.lifetime = 134;
    
      
    
   obstacleGroup.add(obstacle);
    }
}







