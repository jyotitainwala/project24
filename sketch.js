const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var stone1,stone2,stone3,stone4,stone5,stone6;
var iron1,iron2,iron3,iron4,iron5;
var r1,r2,r3,r4,r5,r6,r7,r8,r9,r10;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    stone1=new stone(200,200);
    stone2=new stone(400,300);
    stone3=new stone(150,44);
    stone4=new stone(500,300);
    stone5=new stone(355,555);
    stone6=new stone(455,355);

    iron1=new iron(255,255);
    iron2=new iron(955,300);
    iron3=new iron(1100,400);
    iron4=new iron(400,155);
    iron5=new iron(455,255);

    r1=new Rubber(200,200,40);
    r2=new Rubber(200,190,40);
    r3=new Rubber(200,180,40);
    r4=new Rubber(220,190,40);
    r5=new Rubber(290,190,40);
    r6=new Rubber(800,190,40);
    r7=new Rubber(200,180,40);
    r8=new Rubber(270,590,40);
    r9=new Rubber(270,180,40);
    r10=new Rubber(1100,550,40);
  


}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    stone1.display();
    stone2.display();
    stone3.display();
    stone4.display();
    stone5.display();
    stone6.display();
    iron1.display();
    iron2.display();
    iron3.display();
    iron4.display();
    iron5.display();
    r1.display();
    r2.display();
    r3.display();
    r4.display();
    r5.display();
    r6.display();
    r7.display();
    r8.display();
    r9.display();
    r10.display();
 
}