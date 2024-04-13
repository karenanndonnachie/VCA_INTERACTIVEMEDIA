/*
 * @description Capture video from the webcam and display
 * on the canvas as well with invert filter. 
 * Note that by default the capture feed shows up, too. 
 * You can hide/show the feed by un/commenting the capture.hide() line.
 */
var capture;
function setup() {
  createCanvas(windowWidth, windowHeight);
  capture = createCapture(VIDEO);
  capture.size(640, 480);
  capture.hide();
  imageMode(CENTER);
}
function draw() {
  //background(255);
  image(capture, mouseX, mouseY, capture.width, capture.height);
  filter(THRESHOLD);
}
