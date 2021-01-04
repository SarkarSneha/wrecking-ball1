const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

function setup() {
 
  engine = Engine.create();
  world = engine.world;
createCanvas(800,700);
  box1=new Box(600,200,60,60);
  box2=new Box(600,260,60,60);
  box3=new Box(600,320,60,60);
  box4=new Box(600,380,60,60);
  box5=new Box(600,380+60,60,60);
  box6=new Box(600,380+120,60,60);
  box7=new Box(600,380+180,60,60);
  box8=new Box(600,380+240,60,60);
//second base
box11=new Box(660,200,60,60);
box22=new Box(660,260,60,60);
box33=new Box(660,320,60,60);

bob=new Bob(200,380)
rope=new Rope(bob.body,{x:350,y:200})
//box44=new Box(600,380,60,60);

  ground=new Ground(width/2,height,width,10)
}

function draw() {
  Engine.update(engine)
  background(0);  
  text(mouseX + "," + mouseY, 20, 50);
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  
  //second base display
  box11.display();
  box22.display();
  box33.display();
  bob.display()
  rope.display()
 ground.display();
  drawSprites();
}
function mouseDragged(){
  Matter.Body.setPosition(bob.body,{x:mouseX,y:mouseY})
}