var Boy,BoyImage,Tree,TreeImage,mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,stone
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
BoyImage=loadImage("images/boy.png")
TreeImage=loadImage("images/tree.png")	
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

  //Create the Bodies Here.
  
  stone=new Stone(100,460,25)
Boy=createSprite(160,620)
Boy.addImage(BoyImage)
Boy.scale=0.15

Tree=createSprite(775,490)
Tree.addImage(TreeImage)
Tree.scale=0.35


mango1=new Mango(750,350,20)
mango1.scale=0.02
mango2=new Mango(770,350,20)
mango2.scale=0.02
mango3=new Mango(790,350,20)
mango3.scale=0.02
mango4=new Mango(810,350,20)
mango4.scale=0.02
mango5=new Mango(830,350,20)
mango5.scale=0.02
mango6=new Mango(850,350,20)
mango6.scale=0.02
mango7=new Mango(870,350,20)
mango7.scale=0.02
mango8=new Mango(890,350,20)
mango8.scale=0.02

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Tree.display()

  Boy.display()
  mango1.display()
  mango2.display()
  mango3.display()
  mango4.display()
  mango5.display()
  mango6.display()
  mango7.display()
  mango8.display()
  
  drawSprites()
  
 
}



