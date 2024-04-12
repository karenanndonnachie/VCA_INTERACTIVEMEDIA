
var info;
function setup() {
  createCanvas(windowWidth, windowHeight);
  stroke(255);
  background(0);
  fill(255);
  info=createP("'S' to save, 'SPACE' to clear");
  info.position(20, 20);
  info.attribute('color', 'white');
}

function draw() {
  //background(0);
  line(mouseX, mouseY, pmouseX, pmouseY);

}
function keyPressed(){
  if (key == 's'){
    saveCanvas('fileName', 'png');
  }
  if (key == ' '){
    background(0);
  }
}
