const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var waste, ground, dustbin, Background, LINE1, LINE2, LINE3;

function preload(){

 Background = loadImage("sprites/bg.png")

}

function setup() {

 createCanvas(800, 600);

 engine = Engine.create();
 world = engine.world;

 //Create the Bodies Here.

 LINE1 = createSprite(492, 540, 20, 563);
 LINE1.visible = false;

 LINE2 = createSprite(767, 540, 20, 563);
 LINE2.visible = false;

 LINE3 = createSprite(625, 580, 275, 20);
 LINE3.visible = false;

 dustbin = new Dustbin(630, 425, 70);

 waste = new Paperball(100, 200, 70, {isStatic:true})

 ground = new Ground(600,height,1200,20)

 Engine.run(engine);
  
}


function draw() {

 rectMode(CENTER);
  
 background(Background);
  
 keyPressed();

 drawSprites();

 waste.display(); 

 dustbin.display();

 LINE1.display();

 LINE2.display();

 LINE3.display();

 ground.display();

}

function keyPressed() {
	if (keyCode === UP_ARROW) {
	   
		Matter.Body.applyForce(waste.body, waste.body.position, {x:5, y:-50})
	   
	 }
   }