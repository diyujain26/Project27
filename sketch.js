
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1,bob2,bob3,bob4,bob5;
var roof,roof2,roof3,roof4,roof5;
var rope1,rope2,rope3,rope4,rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	bobDiameter = 2;

	bob1 = new Bob(400,200,10);
	bob2 = new Bob(420,200,10);
	bob3 = new Bob(440,200,10);
	bob4 = new Bob(460,200,10);
	bob5 = new Bob(480,200,10);

	roof = new Roof(400,10,10,10);
	roof2 = new Roof(420,10,10,10);
	roof3 = new Roof(440,10,10,10);
	roof4 = new Roof(460,10,10,10);
	roof5 = new Roof(480,10,10,10);

	//Create the Bodies Here.


	Engine.run(engine);

	rope1 = new Rope(bob1.body,roof.body,bobDiameter*2,0)
	rope2 = new Rope(bob2.body,roof.body,bobDiameter*2,0)
	rope3 = new Rope(bob3.body,roof.body,bobDiameter*2,0)
	rope4 = new Rope(bob4.body,roof.body,bobDiameter*2,0)
	rope5 = new Rope(bob5.body,roof.body,bobDiameter*2,0)

	var options = {
		bodyA:bob1.body,
		bodyB:roof.body,
		stiffness:0.04,
		length:10
	}
   // var rope = constraint.create(options)
  
}


function draw() {
  rectMode(CENTER);
  background(255);

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  strokeWeight(3);
  line(bob1.body.position.x,bob1.body.position.y,roof.body.position.x,roof.body.position.y);
  line(bob2.body.position.x,bob2.body.position.y,roof2.body.position.x,roof2.body.position.y);
  line(bob3.body.position.x,bob3.body.position.y,roof3.body.position.x,roof3.body.position.y);
  line(bob4.body.position.x,bob4.body.position.y,roof4.body.position.x,roof.body.position.y);
  line(bob5.body.position.x,bob5.body.position.y,roof5.body.position.x,roof.body.position.y);

  
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:195,y:-200});
	   
	 }
   }

