function setup() {
createCanvas(windowWidth, windowHeight);
background("blue");
let myButton=createButton("INTERACTIVE MEDIA");
myButton.position(100, 100);
rectMode(CENTER);
textAlign(CENTER, CENTER);
myButton.mousePressed(spawn);
//let div=createDiv("I AM A DIV!");
//div.position(width/2, height/2);
//let link = createA("https://becausewhy.org", "linkylink");
//link.position(200, 600);
}
function draw() {

}
function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
  background(random(255), random(255), random(255));
}
function spawn(){
  background(random(255), random(255), random(255));
  let rotation=random[0, random(-45, 45)];
  let texts=["2025", "INTERACTIVE MEDIA", "G09.DIGITAL_HUB", "(NEAR THE LIBRARY)", "MAY 29", "4PM~6PM", "GRAPHIC DESIGN", "INTERACTIVE MEDIA", "SHOWCASE", "VCA", "SOUTHBANK"];
  let otherbutton =createButton(random(texts));
  otherbutton.position(random(width-100), random(height-100));
  otherbutton.style("rotate", rotation+"deg");
  otherbutton.style("text-wrap-mode", "nowrap");
  otherbutton.mousePressed(spawn); 
}
