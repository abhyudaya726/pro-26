const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Render = Matter.Render;

var engine, world;

var ground;

var boy,boyImg;

var stone,stoneImg,chain;

var tree,treeImg;

var mango1,mango2,mango3,mango4;
var m1Img,m2Img,m3Img,m4Img;

function preload(){
    boyImg = loadImage("images/boy.png");

    treeImg = loadImage("images/tree.png");

    stoneImg = loadImage("images/stone.png");

    m1Img = loadImage("images/mango.png")
}

function setup(){
    canvas = createCanvas(800,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options = {
        isStatic:true
    }

    ground = Bodies.rectangle(400,300,800,10,ground_options);
    World.add(world,ground);

    stone = new Stone(223,248,40,40);

    boy = new Boy(200,300,30,30);

    chain = new Chain(stone.bodies,{x:160,y:200});

    tree = new Tree(605,245,10,100);

    mango1 = new Mango(571,75,30);
    mango2 = new Mango(605,67,30);
    mango3 = new Mango(565,130,30);
    mango4 = new Mango(625,113,30);
    
    var render = Render.create({ element: document.body, engine: engine, options: { width: 1300, height: 600, wireframes: false } }); Engine.run(engine); Render.run(render);
}

function draw(){
    background(255);
    Engine.update(engine);

    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,800,10);


    stone.display();

    imageMode(CENTER);
    image(boyImg,200,250,100,200);
    image(treeImg,600,150,200,300);

    chain.display();

    mango1.display();
    mango2.display();
    mango3.display();
    mango4.display();

    text(mouseX+","+mouseY,mouseX,mouseY);

    collide(stone,mango1);
    collide(stone,mango2);
    collide(stone,mango3);
    collide(stone,mango4);
}

function mouseDragged(){
    Matter.Body.setPosition(stone.bodies,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    chain.fly();
}

function keyPressed(){
    if (keyCode === 32) {
        chain.attach(stone.bodies);
    }
}

function collide(obj1,obj2){
    obj1pos = obj1.bodies.position;
    obj2pos = obj2.bodies.position;

    var distance = dist(obj1pos.x,obj1pos.y,obj2pos.x,obj2pos.y);

    if (distance<=obj1.r+obj2.r) {
        Matter.Body.setStatic(obj2.bodies,false);
    }
}