const Engine= Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies;
const Body=Matter.Body;
const Constraint= Matter.Constraint;

var engine,world;
var stand1,stand2;
var b1,b2;
var holder,ball,ground;
var ball,back;
var slingShoot;
var polygon_img,game_img;
function preload(){
  polygon_img=loadImage("polygon.png");
  game_img=loadImage("game.png");
}

function setup(){
    createCanvas(900,400);
    engine = Engine.create();
    world = engine.world;
    Engine.run(engine);
    ground=new Ground(400,580,1000,20)
    stand1=new Stand(390,300,250,20);
    stand2=new Stand(690,200,250,20);
    stand3=new Stand(450,390,900,10);

    b1=new Box(300,275,30,40);
    b2=new Box(330,275,30,40);
    b3=new Box(360,275,30,40);
    b4=new Box(390,275,30,40);
    b5=new Box(420,275,30,40);
    b6=new Box(450,275,30,40);
    b7=new Box(480,275,30,40);

    b8=new Box(330,235,30,40);
    b9=new Box(360,235,30,40);
    b10=new Box(390,235,30,40);
    b11=new Box(420,235,30,40);
    b12=new Box(450,235,30,40);

    b13=new Box(360,195,30,40);
    b14=new Box(390,195,30,40);
    b15=new Box(420,195,30,40);

    b16=new Box(390,155,30,40);

    bk1=new Box(600,175,30,40);
    bk2=new Box(630,175,30,40);
    bk3=new Box(660,175,30,40);
    bk4=new Box(690,175,30,40);
    bk5=new Box(720,175,30,40);
    bk6=new Box(750,175,30,40);
    bk7=new Box(780,175,30,40);

    bk8=new Box(630,135,30,40);
    bk9=new Box(660,135,30,40);
    bk10=new Box(690,135,30,40);
    bk11=new Box(720,135,30,40);
    bk12=new Box(750,135,30,40);

    bk13=new Box(660,95,30,40);
    bk14=new Box(690,95,30,40);
    bk15=new Box(720,95,30,40);

    bk16=new Box(690,55,30,40);

    ball=Bodies.circle(50,200,20);
    World.add(world,ball);

    slingShoot=new Slingshoot(this.ball,{x:100,y:200});

}
function draw(){
    background("violet");
    //Engine.update(engine);
    image(game_img,0,0,900,400)
    //image(game_img,ball.position.x-100,ball.position.y-210,900,400);
    textSize(20);
    fill("lightyellow");
    text("Drag to Hexagonal Stone and Release it,to launch it towards the blocks",100,30);
    ground.display();
    stand1.display();
    stand2.display();
    stand3.display();
    strokeWeight(2);
    stroke(15);
    fill("green");
    b1.display();
    b2.display();
    b3.display();
    b4.display();
    b5.display();
    b6.display();
    b7.display();
    fill("white");
    b8.display();
    b9.display();
    fill("blue");
    b10.display();
    fill("white");
    b11.display();
    b12.display();
    fill("orange");
    b13.display();
    b14.display();
    b15.display();
    fill("orange");
    b16.display();
    fill("green");

    bk1.display();
    bk2.display();
    bk3.display();
    bk4.display();
    bk5.display();
    bk6.display();
    bk7.display();
    fill("white");
    bk8.display();
    bk9.display();
    fill("blue");
    bk10.display();
    fill("white");
    bk11.display();
    bk12.display();
    fill("orange");
    bk13.display();
    bk14.display();
    bk15.display();
    bk16.display();

    fill("red");
    imageMode(CENTER)
    image(polygon_img,ball.position.x,ball.position.y,40,40);
   
    slingShoot.display();
}
function mouseDragged(){
  Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  slingShoot.fly();
}
