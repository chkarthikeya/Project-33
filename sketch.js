const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var snow=[]

function preload(){
  bg=loadImage("snow3.jpg");
}

function setup() {
  

  createCanvas(800,400);
  
  engine=Engine.create();
  world=engine.world;

  a=new Snowflake(200,200,10)
}

function draw() {
  background(bg); 
  Engine.update(engine); 

 snow.push(new Snowflake(random(0,800),0,50));
 for(var i=0;i<snow.length;i++){
   snow[i].display();
}
a.display();
  
}