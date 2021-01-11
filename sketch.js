const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var particles = []
var divisions = []
var plinkos = []
var divisionHeight = 300


function setup() {
  createCanvas(800,600);
  engine = Engine.create();   
  world = engine.world;
  ground = new Ground(400,575,800,50)
  
  
}

function draw() {
  background("green");  

  Engine.update(engine)

  ground.display();
  for(var j=0;j<particles.length;j++){
    particles[j].display();
   // Engine.update(engine);
  }

    
  for(var k=0;k<=width;k=k+132){
    divisions.push(new Division(k,height-divisionHeight/2,10,divisionHeight))
  }

  for(k=0;k<divisions.length;k++){
    divisions[k].display();
  }

 for(var j=25; j<=800; j=j+70){
   plinkos.push(new Plinko(j,75,10))
  }
  for(j=0;j<plinkos.length;j++){
    plinkos[j].display();
  }

  for(var j=15; j<=width-12;j=j+70){
    plinkos.push(new Plinko(j,175,10))
  }

 

  if(frameCount%30===0){
    particles.push(new Particle(random(width/2-150,width/2+150),10,10))
  }
  drawSprites();
}