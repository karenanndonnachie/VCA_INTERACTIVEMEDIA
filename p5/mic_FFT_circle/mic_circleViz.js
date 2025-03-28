let phase = 0;
let zoff = 0;
var mic, vol, fft, bass, mid, treble;
var prevVol, prevTreb, prevMid, prevBass;
var firstTreb, firstMid,firstBass;
var bg;
var a=0;
var x=0;
var y=0;
var button;
var started;
var timerStart = 0;
var timerLength = 180;
var timerCount = 0;
var colors1 = [];
var numcolors1 = 5;

function setup() {
  createCanvas(windowWidth, windowHeight);
  //bg=createCanvas(300,300);
  //capture = createCapture(VIDEO);
  //capture.size(320, 240);
  //background(255,255,0);
  getAudioContext().suspend();
  button = createButton('start');
  button.position(windowWidth/2, 50);
  button.mousePressed(start);
  started=false;
  mic = new p5.AudioIn();
  mic.start();
  fft = new p5.FFT();
  fft.setInput(mic);
  vol = mic.getLevel();
  //frameRate(10);
  //background(0);
  stroke(0.255,0);
  strokeWeight(2);
  //colors1 = [color('#c0392b'), color('#e67e22'), color('#f1c40f'), color('#2ecc71'), color('#3498db')];
  
  prevTreb=createVector(0,0);
  prevBass=createVector(0,0);
  prevMid=createVector(0,0);
  
  firstTreb=createVector(200,0); // makes vector for first point of circle, must add for each circle
  firstMid=createVector(200,0);
  firstBass=createVector(200,0);
}
function start(){
  userStartAudio();
  started=true;
 // fill(255);
  //ellipse(height/2, width/2, 100) ;
  }
  
function draw() {
  //bg.img(capture(0,0,300,300));
  if (started==true){
      if (millis() - timerStart > timerLength){ 
        timerCount++;
        if (timerCount > numcolors1){
          timerCount = 1;
        }
        timerStart = millis(1);
  
  vol = mic.getLevel();
  let fftanalyze = fft.analyze();
  bass = fft.getEnergy("bass");
  mid = fft.getEnergy("mid");
  treble = fft.getEnergy("treble");
  
  translate(windowWidth/2, windowHeight/2);
  
  stroke(0,255,0);
  //text(mid, 100, 100);
  noFill();
  
  //beginShape();
  let treblemax = map(treble, 0, 255, 0, 400); //can adjust where necessary
    rotate(PI/2*3);
    xoff = map(cos(a+phase), -1, 5, 0, treblemax);
    yoff = map(sin(a), -1, 5, 0, treblemax);
    r = treblemax+200;
    x = r * cos(a);
    y = r * sin(a);
    stroke(0,255,0);
        //stroke(colors1[timerCount - 1]);
    strokeWeight(2);
    
    if (a==0){ // no line from center to radius
    noStroke()}
    
    if (a<=TWO_PI){ // stop drawing at 360 degrees
    line(x, y, prevTreb.x, prevTreb.y);
    prevTreb.x=x;
    prevTreb.y=y;}
    
    if (a>=TWO_PI){ // close shape by drawing to vect. 'first point'
    rotate();
    line(firstTreb.x, firstTreb.y, prevTreb.x, prevTreb.y)} // correct to Treb not Mid
  //endShape(CLOSE);
  
  //beginShape();
  let midmax = map(mid, 0, 255, 0, 200); //can adjust where necessary
    //rotate(PI/2*3);
    xoff = map(cos(a+phase), -1, 5, 0, midmax);
    yoff = map(sin(a), -1, 5, 0, midmax);
    r = midmax+200;
    x = r * cos(a);
    y = r * sin(a);
    //stroke(colors1[timerCount - 1]);
    stroke(0,255,0);
    //stroke((255),random(200,225),random(0,220)); //add variating colour
    strokeWeight(2);
    
    if (a==0){ // no line from center to radius
    noStroke()}
    
    if (a<=TWO_PI){ // stop drawing at 360 degrees
    line(x, y, prevMid.x, prevMid.y);
    prevMid.x=x;
    prevMid.y=y;}
    
    if (a>=TWO_PI){ // close shape by drawing to vect. 'first point'
    rotate();
    line(firstMid.x, firstMid.y, prevMid.x, prevMid.y)} // correct to Treb not Mid
  //endShape(CLOSE);
  
 
  //beginShape();
  let bassmax = map(bass, 0, 255, 0, 200); //can adjust where necessary
    //rotate(PI/2*3);
    xoff = map(cos(a+phase), -1, 5, 0, bassmax);
    yoff = map(sin(a), -1, 5, 0, bassmax);
    r = bassmax+200;
    x = r * cos(a);
    y = r * sin(a);
    // stroke(colors1[timerCount - 1]);
    stroke(0,255,0);
    strokeWeight(2);
    
    if (a==0){ // no line from center to radius
    noStroke()}
    
    if (a<=TWO_PI){ // stop drawing at 360 degrees
    line(x, y, prevBass.x, prevBass.y);
    prevBass.x=x;
    prevBass.y=y;}
    
    if (a>=TWO_PI){ // close shape by drawing to vect. 'first point'
    rotate();
    line(firstBass.x, firstBass.y, prevBass.x, prevBass.y)} // correct to Treb not Mid
    //endShape(CLOSE);
  
        timerStart = millis(1); 
  
  phase += 1;
  a+=0.1;
}
      }  
    }
