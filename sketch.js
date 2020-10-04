var ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var  paper1,bin1,bin2,bin3,bin4;	
var world;


function setup() {
	createCanvas(1440, 700,100,100);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	paper1=new paper(200,450,40);
	
	bin4=new bin(1200,500,300,300)
	//bin2=new binother(1120,630,150,20)
	//bin3=new binothert(1050,540,20,200)
	bin1=new binother(1250,540,20,220)
	bin2=new binother(1150,630,250,20)
	bin3=new binother(1030,515,20,250)
	groundSprite=createSprite(700,650, width,10);
	groundSprite.shapeColor=color("white")
	
	Engine.run(engine);
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true,restitution:1} );
	World.add(world, ground);
	World.add(world,bin1);
}


function draw() {
	
  rectMode(CENTER);
  background("gray");
  drawSprites();
  paper1.display();
  bin1.display();
  bin2.display();
  bin3.display();
  bin4.display();
 }


function keyPressed() {
  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(paper1.body,paper1.body.position,{x:85,y:-95});
		
	  }

}