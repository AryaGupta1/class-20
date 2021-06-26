
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine;
var world;
var ball1;
var ball2;
var ball3;
var ball4;
var ball5;
var wedge1;
var wedge2;
var wedge3;
var angle1=60;
var angle2=80;
var angle3=40;
var ground1;
var ground2;
var ground3;



function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    
	
	var ball1_options={
		restitution:0.4,
		friction:0.01,
	}
	
	ball1=Bodies.circle(400,350,20,ball1_options);
	World.add(world,ball1)

	var ground1_options={
		isStatic:true
	}
	
	ground1=Bodies.rectangle(200,680,800,20,ground1_options);
	World.add(world,ground1);
	ellipseMode(RADIUS);  
	rectMode(CENTER)
	fill("brown");
	
  
}


function draw() {
	background("lightgreen");
  Engine.update(engine); 
  
  ellipse(ball1.position.x,ball1.position.y,20);
  rect(ground1.position.x,ground1.position.y,800,20);
 
}



