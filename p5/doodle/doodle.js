function setup() {
createCanvas(windowWidth, windowHeight);
background(255,255,255);
}


function draw() {
  if (mouseIsPressed) {
     strokeWeight(10)
     stroke(255);
   } else {
     strokeWeight(1);
     stroke(0);
   }
     line(mouseX, mouseY, pmouseX, pmouseY);
   }
