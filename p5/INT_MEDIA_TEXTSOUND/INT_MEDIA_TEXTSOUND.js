var song; //initiating our variable
var analyzer, volume;
function preload() {
  soundFormats('mp3', 'ogg');
  song = loadSound ('data/beat.mp3'); 
}

function setup() {
  //song = loadSound ('data/beat.mp3'); //associate our sound to the variable 'song'
  createCanvas (windowWidth, windowHeight); // create full window canvas
  background(255);
  getAudioContext().suspend();

  fill(120);
  textSize(72);
  textAlign(CENTER,CENTER);
  noLoop();
}

function draw() {
  background(120);
  fill(255);
  volume = analyzer.getLevel();
  console.log(volume);
  volume*=400;
  ellipse(width/2,height/2,volume,volume);
  fill(0);
  textSize(volume*2);
  translate(width/2,height/2);
  textX=map(volume, 0, 400, 0, windowWidth);
  textY=map(volume, 0, 400, 0, windowHeight);
  rotate(volume);
  text('DANCE!', 0, 0);
}

function mousePressed() {
  if (getAudioContext.state!=='running'){
    userStartAudio();
    analyzer = new p5.Amplitude();
    analyzer.setInput(song);
    loop();
    song.loop();
    song.play();
  }
  else if (song.isPlaying()) {
    //background(255);
    song.stop(); // if the song is playing, stop it
    song.noLoop();
  }
  else {
    //background(120);
    song.loop();
    //song.play(); 
  }
}
