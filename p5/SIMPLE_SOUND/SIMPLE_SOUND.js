
let song;
function preload() {
  song = loadSound('data/bell.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  getAudioContext().suspend();
}

function draw() {
  background(200);
  // Set the volume to a range between 0 and 1.0
  // Using map function: map(watchedValue, minIn, maxIn, minOut, maxOut)
  let volume = map(mouseX, 0, width, 0, 1);
  volume = constrain(volume, 0, 1);
  if (getAudioContext().state == 'running') {
  song.amp(volume);

  // Set the rate to a range between 0.1 and 4
  // Changing the rate alters the pitch
  let speed = map(mouseY, 0.1, height, 0, 2);
  speed = constrain(speed, 0.01, 4);
  song.rate(speed);
  }
  // Draw some circles to show what is going on
  stroke(0);
  fill(50, 100);
  ellipse(mouseX, 100, 48, 48);
  stroke(0);
  fill(51, 100);
  ellipse(100, mouseY, 48, 48);
}
function mousePressed() {
  if (getAudioContext().state !== 'running') {
    getAudioContext().resume();
    song.play();
    song.loop();
   }
}
function keyTyped(){
  if (key ==" "){
    if (song.isPlaying()==true){
    song.stop();
    song.noLoop();
  }
  else {
  song.play();
  song.loop();
    }
  }
}
