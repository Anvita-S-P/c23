const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;



var myEngine,myWorld,ground;
var box1;











function setup() {
  createCanvas(1200,600);
  myEngine=Engine.create();
  myWorld=myEngine.world;

  
  box1=new Box(200,300,50,50);
  box2=new Box(240,100,50,80);
  ground=new Ground(600,590,1200,20);

} 

function draw() {
  background(0); 
  
  
  Engine.update(myEngine);
   
  box1.display();
  box2.display();
  ground.display();

  

}