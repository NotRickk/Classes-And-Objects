const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;
var box1 , box2 , box3 , box4,box5;
var log1 , log2 , log3 , log4;
var pig1 , pig2;
var bird1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;



    ground = new Ground(600,height,1200,30);
    box1 = new box (700,320,70,70)
    box2 = new box (920,320,70,70)
    box3 = new box (700,240,70,70)
    box4 = new box (920,240,70,70)
    box5 = new box (810,160,70,70)
    log1 = new log (810,260,300,PI/2)
    log2 = new log (810,180,300,PI/2)
    log3 = new log (770,120,150,PI/7)
    log4 = new log (850,120,150,-PI/7)
    pig1 = new pig (810,220)
    pig2 = new pig (810,300 )
    bird1 = new bird (100,100)

     
    
     /* var ground_options ={
        isStatic: true
    }

  ground = Bodies.rectangle(200,390,200,20,ground_options);
    World.add(world,ground);

    var ball_options ={
        restitution: 1.0
    }

    ball = Bodies.circle(200,100,20, ball_options);
    World.add(world,ball);

    console.log(ground);*/
}

function draw(){
    background(0);
    Engine.update(engine);

    ground.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    log1.display();
    log2.display();
    log3.display();
    log4.display();
    pig1.display();
    pig2.display();
    bird1.display();
   // rectMode(CENTER);
   // rect(ground.position.x,ground.position.y,400,20);

    //ellipseMode(RADIUS);
    //ellipse(ball.position.x, ball.position.y, 20, 20);
}