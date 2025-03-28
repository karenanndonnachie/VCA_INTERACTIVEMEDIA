

var kusamaColours=[[255, 205, 0], "DodgerBlue", "pink", "green", "purple", "blue", "red"];
function setup() {
  createCanvas(windowWidth, windowHeight);
  background("white");
  noStroke();
  frameRate(2);
}
function draw() {
  fill (random(kusamaColours));
  circle(random(width), random(height), random(60, 300));
}
