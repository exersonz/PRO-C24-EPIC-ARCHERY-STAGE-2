const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var player, playerBase;
var computer, computerBase;
var playerArcher, computerArcher

var playerArrow;


function setup() {
  canvas = createCanvas(1200, 580);

  engine = Engine.create();
  world = engine.world;

  playerBase = new PlayerBase(150,430,250,250);
  player = new Player(150,250,100,200);
  
 
  computerBase = new ComputerBase(1050,430,250,250);
  computer = new Computer(1050,250,100,200);

  //Create Computer Archer and Player Archer Object
  computerArcher = new ComputerArcher(980,203,150,150,0);
  playerArcher = new PlayerArcher(160,200,150,150,-PI/2)

  //Create an arrow Object
  playerArrow = new PlayerArrow(1000,1000,100,8,PI/2);
}

function draw() {
  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

  textSize(20);
  text("Press space to Shoot Arrows", width / 2, 150);

  textSize(20);
  text("Press up & down arrows to move", width / 2, 180);

  text(20);
  text("the archer's arm up and down", width / 2, 200);

  playerBase.display();
  player.display();

  computerBase.display();
  computer.display();
  
  playerArcher.display();
  computerArcher.display();

  //Display arrow();
  playerArrow.display(); 
}

function keyPressed()
{
  if(keyCode === 32)
  {
    console.log("a");
    var posX = playerArcher.body.position.x;
    var posY = playerArcher.body.position.y;
    var angle = playerArcher.body.angle;

    playerArrow = new PlayerArrow(posX,posY,100,10,angle);
    Matter.Body.setAngle(playerArrow.body,angle); 
  }
}

function keyReleased()
{
  if(keyCode === 32)
  {
    //playerArrow.display(); 
    playerArrow.shoot(playerArcher.body.angle+PI/2);
  }
}



