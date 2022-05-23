var towerImg, tower,climbres,edges,flecha,espada;
var doorImg, door, doors,gameover,gameover2;
var climberImg, climber;
var ghost, ghostImg;
var  invisibleBlock;
var gameState = "play"

function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadAnimation("ghost-standing.png","ghost-jumping.png");
  spookySound = loadSound("spooky.wav");
  gameover2 = loadImage("gameOver.png");
}

function setup() {
  createCanvas(600, 600);
  tower = createSprite(300,300);
  gameover = createSprite(300,250,300,300);
  gameover.visible = false;
  gameover.scale = 1 /2 ;
  gameover.addImage("gameover",gameover2);
  tower.addImage("torre",towerImg);
  tower.velocityY = 1;
  ghost = createSprite(100,120,30,20);
  ghost.addAnimation("fantasma",ghostImg);
  ghost.scale = 1/2;
  doors = new Group();
  climbres = new Group();
  edges = createEdgeSprites();
}

function draw() {
  background(200);
  doorSpawn();
  
  //console.log(ghost.x);
  
  if(tower.y > 400){
      tower.y = 300
    }
  if ( keyDown ("w" )  ) {
    
    ghost.velocityY = -10;
  }
  if ( keyDown ("a" ) ) {
    
    ghost.velocityX = -5;
  }
  if ( keyDown ("d" )  ) {
    
    ghost.velocityX = 5;
  }
  ghost.collide(climbres);
  
    ghost.velocityY = ghost.velocityY + 0.8;
    if(ghost.isTouching (edges[3]) ){
      climbres.destroyEach();
      doors.destroyEach();
      gameover.visible = true;
      ghost.velocityY = 0;
      ghost.velocityX = 0;
      tower.y = 0 ;

    }
    drawSprites();

  }
  function doorSpawn(){
    if(frameCount %  130 === 0){
      door = createSprite(300,120,30,20);
      door.addAnimation("pueta",doorImg);
      door.scale = 1;
      door.velocityY = 5;
      door.x = random(170,550);
      climber = createSprite(100,170,30,20);
      climber.addAnimation("varilla",climberImg);
      climber.scale = 1;
      climber.velocityY = 5 ;
      climber.x = door.x ;
      doors.add(door);
      climbres.add(climber);
      door.depth = ghost.depth;
      ghost.depth += 1;
      

    }
 
  }
  


  