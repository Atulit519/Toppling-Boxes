const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world, bird, pig1, pig2, log1;
var box1, box2, box3, box4;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    box1 = new Box(800,100,70,70);
    box2 = new Box(1000,100,70,70);
    box3 = new Box(800,300,70,70);
    box4 = new Box(1000,300,70,70);
    bird = new Bird(200, 100);
    pig1 = new Pig(900, 100);
    pig2 = new Pig(500, 300);
    ground = new Ground(600,390,1200,20);
    log1 = new Log(900, 300, 200, PI/2);
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    pig1.display();
    pig2.display();
    bird.display();
    log1.display();
    
    ground.display();
}