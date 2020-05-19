var car,hitter;
var speed,weight;
var deformation;
function setup() {
  createCanvas(800,400);
  car = createSprite(100, 200, 50, 50);
  hitter = createSprite(790, 200, 50, 400);
  hitter.debug = true;
  speed = random(50,90);
  weight = random(500,2000);
  car.velocityX = speed;
}

function draw() {
  background(000);
  if (car.x - hitter.x < car.width/2 + hitter.width/2 
    && hitter.x - car.x < car.width/2 + hitter.width/2) {
      deformation = 0.5*weight*speed*speed/22500;
      console.log(deformation);
      if(deformation < 100 && deformation > 0){
        car.velocityX = 0;
        car.shapeColor = "green";
        deformation = 0;
      }
      if(deformation > 100 && deformation < 180){
        car.velocityX = 0;
        car.shapeColor = "yellow";
      }
      if(deformation > 180 && deformation < 10000){
        car.velocityX = 0;
        car.shapeColor = "red";
      }
  }
 
  drawSprites();
}





