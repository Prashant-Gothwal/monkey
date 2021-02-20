var backgroundImg, background;
var monkey,monkeyImg;
var obstacle, obstacleImg;
var invGrnd, invGrnd2;
var obstacleGroup;
var gameState;
var END;
var monkeyhit;

function preload(){
  backgroundImg = loadImage("background.JPG");
  monkeyImg = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  obstacleImg = loadImage("stone.png");
  monkeyhit = loadAnimation("Monkey_01.png");
  
  
}

function setup(){
  createCanvas(700,600);
  background = createSprite(300,300);
  background.addImage(backgroundImg);
  background.velocityX=-05;
  
  monkey = createSprite(110,380,10,10);
  monkey.addAnimation("moving",monkeyImg);
  monkey.scale=0.3;
  
  
  invGrnd= createSprite(350,450,700,10)
  invGrnd.visible = false;
  invGrnd2= createSprite(350,20,700,10)
  invGrnd2.visible = false;
  
  obstacleGroup= new Group();
}

function draw(){

 if (background.x < 200){
      background.x = background.width/2;
    }
  
  if(monkey.isTouching(obstacleGroup)){
    end();
    // text("GAME OVER!", 200,200);
  }
  
  stone();
  
  if(keyDown("space")){
    monkey.velocityY = -15;
  }
  monkey.velocityY=monkey.velocityY +08;
  
 monkey.collide(invGrnd);
  monkey.collide(invGrnd2);
  
  drawSprites();
    function end(){
    monkey.velocityY = 0;
    background.velocityX = 0;
    obstacle.velocityX = 0;
    // monkey.changeAnimation("collided",monkeyhit)
      text(200,200,"GAME OVER!")
  }
}
function stone(){
  if (frameCount % 200 === 0){
    obstacle = createSprite(600,380);
  obstacle.addImage(obstacleImg);
  obstacle.scale=0.4;
  obstacle.velocityX=-4;
    obstacleGroup.add(obstacle) 
  }
}
