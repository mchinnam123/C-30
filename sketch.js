const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var ground;
var fruit,rope;
var fruit_con;
var bunny
var melon
var bg

function preload()
{
  bunny = loadImage("Rabbit-01.png");
  melon = loadImage("melon.png");
  bg = loadImage("background.png");
}

function setup() 
{
  createCanvas(displayWidth,displayHeight);
  frameRate(80);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(200,680,600,20);

  rope = new Rope(7,{x:245,y:30});
  fruit = Bodies.circle(300,300,20);
  Matter.Composite.add(rope.body,fruit);

  fruit_con = new Link(rope,fruit);

  button = createImg("cut_button.png");
  button.position(200,30);
  button.size(50,50);
  button.mouseClicked(Drop);

  Bunny = createSprite(200,620,100,100);
  Bunny.addImage(bunny);
  Bunny.scale = 0.3;

  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)

  
  
}

function draw() 
{
  background(51);
  
  image(bg,0,0,displayWidth+80,displayHeight)

  push ();

  imageMode(CENTER);

  if(fruit!= null)
  {
    image(melon,fruit.position.x,fruit.position.y,60,60);
  }
  pop ();

  rope.show();
  
  Engine.update(engine);
  ground.show();

 

 

 drawSprites();
   
}

function Drop ()
{
  rope.break();
  fruit_con.detach();
  fruit.con = null;

}
