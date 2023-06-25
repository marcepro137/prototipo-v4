var player;
var fondo;
var cloud;
var ground;
var platform;
var lineas;
var playerJump;
var groundSprite;
var playerSprite;
var lineasSprite;
var groundInvisible;
var gamestate = 1;
//var fondo2

function preload(){
  player = loadImage("./sprites juego/player.png");
  fondo = loadImage("./sprites juego/background.png");
  cloud = loadImage("./sprites juego/cloud.png");
  ground = loadImage("./sprites juego/ground.png");
  platform = loadImage("./sprites juego/platform.png");
  lineas = loadImage("./sprites juego/screen.png");
  playerJump = loadImage("./sprites juego/player Jump.png")

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  groundSprite = createSprite(0,height,width, 40);
  groundSprite.addImage(ground);
  groundSprite.scale= 2.0

  groundInvisible = createSprite(0,height,width,120);
  groundInvisible.visible = false;
  groundInvisible.scale= 2.0

  playerSprite = createSprite(70,height-155,50,50);
  playerSprite.addImage("player",player);
  playerSprite.addImage("Jump",playerJump);

  lineasSprite = createSprite(width/2, height/2, width, height);
  lineasSprite.addImage(lineas);
  lineasSprite.scale= 3.0

 obstaclesGroup = new Group()

 platformGroup = new Group() 
  
  playerSprite.setCollider("rectangle",0,0,200,200);
  //playerSprite.debug = true;
}

function draw() {
  
  //image(fondo,0,0,width,height)
 //groundSprite.velocityX = -5
  if (gamestate == 1){
    background(fondo);
    if (keyDown("d") ){
      playerSprite.x = playerSprite.x+20;
    }
    if (keyDown("a")){
      playerSprite.x = playerSprite.x-20;
    }

    obstacles()

    if(playerSprite.collide(platformGroup)){
      gamestate = 2;
    }
  }
  
  if(gamestate == 2){
    //background(fondo2);
    obstaclesGroup.setVelocityYEach(0);
    textSize(30)
    fill("white")
    r = text ("Presionar: Ctrl + R para reiniciar", width/2,height/2);
    console.log(r.depth())
  }

  //if (keyDown("space")){
    //playerSprite.velocityY =-10;
  //}

  //playerSprite.velocityY = playerSprite.velocityY+0.5;

  playerSprite.collide(groundInvisible);
  
  //playerSprite.collide(platformInvisible);

  if (playerSprite.x > width){
    playerSprite.x = width-50
  }

  if (playerSprite.x < 0){
    playerSprite.x = 50;
  }

  //if (playerSprite.x >= width-100) {
    //groundSprite.destroy();
    //groundInvisible.destroy();
    //obstacle.destroy();
    //platformInvisible.destroy();
    //aleatorio = Math.round(random(width-500,width+500));
    //groundSprite = createSprite(aleatorio,height,width-100, 40);
    //groundSprite.addImage(ground);
    //groundSprite.scale= 2.0
    //groundInvisible = createSprite(aleatorio,height-40,width-500,120);
    //groundInvisible = createSprite(width/3,height-40,width-500,120);
    //groundInvisible.visible = false;
    //playerSprite.x = width-width; 
    //rand = Math.round(random(width-1100,width-200));
    //obstacle = createSprite(rand,height-500,50,50);
    //obstacle.addImage (platform);
    //platformInvisible = createSprite(rand,height-480,300,180);
  //}
  
  drawSprites();
}

  function obstacles() {
    if(frameCount%40 == 0){
      px = Math.round(random(50,width-200));
      obstacle = createSprite(px,0,300,180);
      obstacle.addImage (platform);
      
      platformInvisible = createSprite(px,30,300,180);
      platformInvisible.visible = false;

      //platformInvisible.x = Math.round(random(50,width-200));

      obstacle.velocityY = 10;

      platformInvisible.velocityY = 10;

      obstaclesGroup.add(obstacle);

      platformGroup.add(platformInvisible);
    }

  }

