START=0;
PLAY=1;
END=3;
var score=0;


var gameState= START;
var backgroundImg;
var cat, catImg, catWalk, catLast;
var mouse, mouseImg, mouseTease, mouseLast;

function preload() {
    //load the images here
    backgroundImg = loadImage("images/garden.png");
    catImg= loadAnimation("images/cat1.png");
    mouseImg= loadAnimation("images/mouse1.png")
    mouseTease= loadAnimation("images/mouse2.png", "images/mouse3.png")
    catWalk= loadAnimation("images/cat2.png", "images/cat3.png")
    mouseLast= loadAnimation("images/mouse4.png")
    catLast= loadAnimation("images/cat4.png")

}

function setup(){
    createCanvas(1000,800);
    
    
    //create tom and jerry sprites here
    cat= createSprite(750,600, 30,30);
    cat.addAnimation("catNormal", catImg );
    cat.scale=0.2
    let x = random(0,1000);
    let y= random(0,800);
    mouse= createSprite(x,y, 30,30);
    mouse.addAnimation("mouseNormal", mouseImg );
    mouse.scale=0.1

    keyPressed();
    
    

}

function draw() {
    background(backgroundImg)
    
    //Write condition here to evalute if tom and jerry collide
    console.log(gameState)
   
   if (gameState==START)
   {
       fill("pink")
       cat.visible= false
       mouse.visible=false
       textSize( 75)
       text("Press the SPACEBAR to Start",  0, 400)
       if(keyDown( "space")){
           gameState=PLAY
       }
   }
   if(gameState === PLAY){
       cat.visible=true
       mouse.visible=true
       if(frameCount % 60 === 0){
           score+=1
       }
       fill("white")
       textSize(50)
       text("Score: " + score ,800,50)







       if(cat.x-mouse.x<(cat.width-mouse.width)/2 && cat.y-mouse.y<(cat.height-mouse.height )/2) {
           mouse.velocityX=0;
           mouse.velocityY=0;
           mouse.addAnimation("mouseLast", mouseLast)
           mouse.changeAnimation("mouseLast")
 
           cat.addAnimation("catLast", catLast)
           cat.changeAnimation("catLast")
           cat.velocityX=0
           cat.velocityY=0
           gameState= END
           fill("blue")
       textSize( 50)
       text("Game Over you got the mouse",  20, 400)
       fill(white)
       text("Score: " + score ,800,50)
        
 
 
    }
 }
   
   
    
   
   




    drawSprites();
    
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode===LEFT_ARROW){
      mouse.addAnimation("MouseTease", mouseTease)
      mouse.changeAnimation("MouseTease");
      mouse.frameDelay = 10;

      cat.velocityX=-2;
      cat.velocityY=0
      cat.addAnimation("catMove", catWalk)
      cat.changeAnimation("catMove")
      cat.frameDelay=10;


  }
  if(keyCode===RIGHT_ARROW){
    mouse.addAnimation("MouseTease", mouseTease)
    mouse.changeAnimation("MouseTease");
    mouse.frameDelay = 10;

    cat.velocityX=+2;
    cat.velocityY=0
    cat.addAnimation("catMove", catWalk)
    cat.changeAnimation("catMove")
    cat.frameDelay=10;


}
if(keyCode===DOWN_ARROW){
    mouse.addAnimation("MouseTease", mouseTease)
    mouse.changeAnimation("MouseTease");
    mouse.frameDelay = 10;

    cat.velocityY=+2;
    cat.velocityX=0
    cat.addAnimation("catMove", catWalk)
    cat.changeAnimation("catMove")
    cat.frameDelay=10;


}
if(keyCode===UP_ARROW){
    mouse.addAnimation("MouseTease", mouseTease)
    mouse.changeAnimation("MouseTease");
    mouse.frameDelay = 10;

    cat.velocityY=-2;
    cat.velocityX=0;
    cat.addAnimation("catMove", catWalk)
    cat.changeAnimation("catMove")
    cat.frameDelay=10;


}
}
