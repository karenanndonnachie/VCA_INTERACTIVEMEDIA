let font, points, bounds, sampleF;
function preload(){
font=loadFont("data/Candice.ttf");
}
function setup() {
createCanvas(windowWidth,windowHeight);
background("blue");
sampleF=0.2;
points = font.textToPoints(
    "diamonds", width/4-200, height/2, 400, {
      sampleFactor: sampleF,
      simplifyThreshold: 0
    });
 rectMode(CENTER);
 //bounds = font.textBounds("diamonds", width/4-200, height/2, 400);
}
function draw() {
  background("blue");
//sampleF = map(mouseX, 0, width, 0, 1);
points = font.textToPoints(
    "diamonds", width/4-200, height/2, 300, width, {
      sampleFactor: sampleF,
      simplifyThreshold: 0
    });
for (let i=0; i<points.length; i++){
  stroke("yellow");
line(points[i].x,points[i].y, mouseY, mouseX);
  fill(random(256), random(256), random(256));
circle(points[i].x+random(5), points[i].y+random(5), 10);
}
}
