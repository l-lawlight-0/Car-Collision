var car,hitter;
var speed,weight;
var deformation;
function setup() {
  createCanvas(800,400);
  car = createSprite(100, 200, 50, 50);
  //car.velocityX = 2;
  hitter = createSprite(790, 200, 50, 400);
  hitter.debug = true;
  speed = random(1,2);
  weight = random(1,2);
  
}

function draw() {
  background(000);
  car.velocityX = speed;
  deformation = 0.5*weight*speed*speed/22500;
  if(car.x - hitter.x <= car.width/2 + hitter.width /2
    && hitter.x - car.x <= car.width/2 + hitter.width/2 
    && deformation <= 100){
    car.velocityX = 0;
    car.shapeColor = "green";
  }
  if(car.x - hitter.x <= car.width/2 + hitter.width /2
    && hitter.x - car.x <= car.width/2 + hitter.width/2 
    && deformation <= 110||deformation >=169){
    car.velocityX = 0;
    car.shapeColor = "yellow";
  }
  if(car.x - hitter.x <= car.width/2 + hitter.width /2
    && hitter.x - car.x <= car.width/2 + hitter.width/2 
    && deformation >= 180){
    car.velocityX = 0;
    car.shapeColor = "red";
  }
  drawSprites();
}


