const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world,ground;
var ball1;
function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  var g_options = {
    isStatic: true
  }

  ground = Bodies.rectangle(200,390,400,20,g_options);
  World.add(world,ground);

  var b_options = {
    restitution : 1.0
  }
  
  ball1 = Bodies.circle(100,50,20,b_options);
  World.add(world,ball1);
  ball2 = Bodies.circle(300,50,20,b_options);
  World.add(world,ball2);
}

function draw() {
  background(0); 
  Engine.update(engine);
  rectMode(CENTER); 
  fill("blue");
  rect(ground.position.x,ground.position.y,400,20);
  ellipseMode(RADIUS);
  fill("red");
  ellipse(ball1.position.x,ball1.position.y,20,20);
  fill("yellow");
  ellipse(ball2.position.x,ball2.position.y,30,30);
}