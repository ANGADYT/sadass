var taxi

function preload() {
  backgroundImage=loadImage("./road.png");
  taxiImage=loadImage("./taxi.png");
}

function setup() {
createCanvas(1000,9190);
taxi=createSprite(10,10,95,9000);
taxi=loadImage("taxiImage")

}

function draw() {
  background(backgroundImage)
 
  drawSprite()
}
