function setup() {
  createCanvas(windowWidth, windowHeight);
  stroke(255);
  background(0);
  createP("'S' to save, 'SPACE' to clear", 20, 20);
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
