const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var stick1;
var stone1;

function setup() {
createCanvas(600,400);
engine = Engine.create();
 world = engine.world; 
stick1=new Stick(30,310,10,300,PI/2)
stick2=new Stick(570,310,10,300,PI/2)
stick3=new Stick(165,100,10,300,PI/5)
stick4=new Stick(570,310,10,300,PI/2)
}

function draw() {
 background(0,255,0);  
 Engine.update(engine);
 stick1.display();
 stick2.display();
 stick3.display();
 stick4.display();
  drawSprites();
}