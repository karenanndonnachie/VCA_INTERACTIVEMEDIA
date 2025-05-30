/*
     INTERACTIVE MEDIA 2025
     STUDENT SHOWCASE
     Opening Thursday 
     29th May 4-6 pm
     863-0-G09-Digital Teaching Hub
     Southbank Library, University of Melbourne
     Building 863, 234 St Kilda Rd Southbank VIC
*/
function setup() {
createCanvas(windowWidth, windowHeight);
background("blue");
let myButton=createButton("INTERACTIVE MEDIA");
myButton.position(100, 100);
let myButton2=createButton("CLICK ME");
myButton2.position(random(width), random(height));
rectMode(CENTER);
textAlign(CENTER, CENTER);
myButton.mousePressed(spawn);
myButton2.mousePressed(spawn);

}
function draw() {
     if (frameCount%300 ==0){
          spawn();
     }
}
function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
  background(random(255), random(255), random(255));
}
function spawn(){
  background(random(255), random(255), random(255));
  let rotation=random(-45, 45);
  let texts=["2025", "INTERACTIVE MEDIA", "G09.DIGITAL_HUB", "(NEAR THE LIBRARY)", "MAY 29", "4PM~6PM", "GRAPHIC DESIGN", "INTERACTIVE MEDIA", "SHOWCASE", "VCA", "SOUTHBANK", ];
  let otherbutton =createButton(random(texts));
  otherbutton.position(random(width-100), random(height-100));
  otherbutton.style("rotate", rotation+"deg");
  otherbutton.style("text-wrap-mode", "nowrap");
  otherbutton.mousePressed(spawn); 
}
