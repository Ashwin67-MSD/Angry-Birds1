const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1000,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,350,70,70);
    box2 = new Box(900,350,70,70);
    pig1 = new Pig(800,350)
    log1 = new Log(800,320,300,PI/2)
    ground = new Ground(800,height,1600,20)
    bird1 = new bird(100,100)
    box3 = new Box(700,300,70,70)
    box4 = new Box(900,300,70,70)
    pig2 = new Pig(800,300)
    log2 = new Log(800,250,300,PI/2)
    box5 = new Box(800,200,70,70)
    log3 = new Log(850,180,150,-PI/7)
    log4 = new Log(720,180,150,PI/7) 
}

function draw(){
    background(0);
    Engine.update(engine);
    text(mouseX+","+mouseY,mouseX,mouseY)
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig1.display()
    log1.display()
    bird1.display();
    log2.display();
    pig2.display();
    box3.display();
    box4.display();
    box5.display();
    log3.display();
    log4.display();
}