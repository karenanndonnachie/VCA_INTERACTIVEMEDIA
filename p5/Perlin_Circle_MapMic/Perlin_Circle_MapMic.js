////let slider;
let phase = 0;
let zoff = 0;
var mic, vol, bass, fft, mid, high;

function setup() {
  createCanvas(windowWidth, windowHeight);
  getAudioContext().suspend();
  mic = new p5.AudioIn();
  mic.start();
  fft = new p5.FFT();
  fft.setInput(mic);
  
  vol = mic.getLevel();
  frameRate(8);
  ////slider = createSlider(0, 10, 0, 0.1);
  ////background(0);
}


function mousePressed(){
    userStartAudio();
  }
  
function draw() {
  background(0, 20);
  vol = mic.getLevel();
  let fftanalyze = fft.analyze();
  mid = fft.getEnergy("mid");
  bass = fft.getEnergy("bass");
  high = fft.getEnergy("treble");
  translate(windowWidth/2, windowHeight/2);
  stroke (255);
  //text(mid, 100, 100);
  noFill();
  beginShape();
  let noiseMax = map(vol, 0, 1.0, 0, 255);
  for (let a = 0; a < TWO_PI; a+=0.1) {
    let xoff = map(cos(a+phase), -1, 5, 0, noiseMax);
    let yoff = map(sin(a), -1, 5, 0, noiseMax);
    let r = map(noise(xoff, yoff), 0, 1,100, 200);
    let x = r * cos(a);
    let y = r * sin(a);
    strokeWeight(2);
    vertex(x,y);
}
  endShape(CLOSE);
 beginShape();
  let midmax = mid; //can adjust where necessary
  for (let a = 0; a < TWO_PI; a+=0.1) {
    let xoff = map(cos(a+phase), -1, 5, 0, midmax);
    let yoff = map(sin(a), -1, 5, 0, midmax);
    let r = map(noise(xoff, yoff), 0, 1,100, 400);
    let x = r * cos(a);
    let y = r * sin(a);
    stroke(0,255,0);
    strokeWeight(2);
    vertex(x,y);
}
  endShape(CLOSE);
  beginShape();
  let bassmax = bass; //can adjust where necessary
  for (let a = 0; a < TWO_PI; a+=0.1) {
    let xoff = map(cos(a+phase), -1, 5, 0, bassmax);
    let yoff = map(sin(a), -1, 5, 0, bassmax);
    let r = map(noise(xoff, yoff), 0, 1,-100, 200);
    let x = r * cos(a);
    let y = r * sin(a);
    stroke(255,0,0);
    strokeWeight(2);
    vertex(x,y);
}
  endShape(CLOSE);
  beginShape();
  let highmax = high; //can adjust where necessary
  for (let a = 0; a < TWO_PI; a+=0.1) {
    let xoff = map(cos(a+phase), -1, 5, 0, highmax);
    let yoff = map(sin(a), -1, 5, 0, highmax);
    let r = map(noise(xoff, yoff), 0, 1,100, 500);
    let x = r * cos(a);
    let y = r * sin(a);
    stroke(0,0,255);
    strokeWeight(2);
    vertex(x,y);
}
  endShape(CLOSE);
  phase += 1;
  
}
