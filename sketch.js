var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,log1,log2,log3;
var logsprite1,logsprite2,logspite3
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6;

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.7, isStatic:true});
	World.add(world, packageBody);
	
	log1 = Bodies.rectangle((width/2)-100,610,20,120,{isStatic:true})
	World.add(world,log1);
	fill("red");
	
	log2 = Bodies.rectangle((width/2)+100,610,20,100,{isStatic : true});
	World.add(world,log2);
	
	log3 = Bodies.rectangle(width/2,650,100,20,{isStatic : true});
	World.add(world,log3);

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  rect(log1.position.x,log2.position.y,20,100);
  rect(log2.position.x,log2.position.y,20,100);
  rect(log3.position.x,log3.position.y,220,20);
  drawSprites();
 
}

function keyPressed() {
 	if (keyCode === DOWN_ARROW) {
        Matter.Body.setStatic(packageBody,false)
    }
}



