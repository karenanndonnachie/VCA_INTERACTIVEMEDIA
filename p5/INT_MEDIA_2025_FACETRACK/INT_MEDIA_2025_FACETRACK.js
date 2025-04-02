let faceapi;
let detections = [];

let video;
let canvas;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  background(0);
  canvas.id("canvas");
  video = createCapture(VIDEO);// Creat the video
  video.id("video");
  video.size(width, height);

  const faceOptions = {
    withLandmarks: true,
    withExpressions: true,
    withDescriptors: true,
    minConfidence: 0.5
  };
  faceapi = ml5.faceApi(video, faceOptions, faceReady);
}

function faceReady() {
  faceapi.detect(gotFaces);// Start detecting faces
}

// Got faces
function gotFaces(error, result) {
  if (error) {
    console.log(error);
    return;
  }
  detections = result; //Now all the data --> detections
  clear();
  drawBoxs(detections); //Draw box
  drawLandmarks(detections); // Draw face points
  drawExpressions(detections, width/10, height/2, 20);
  faceapi.detect(gotFaces);
}

function drawBoxs(detections){
  if (detections.length > 0) { //If at least 1 face is detected
    for (f=0; f < detections.length; f++){
      let {_x, _y, _width, _height} = detections[f].alignedRect._box;
      stroke(0, 255, 0);
      strokeWeight(1);
      noFill();
      rect(_x, _y, _width, _height);
    }
  }
}

function drawLandmarks(detections){
  if (detections.length > 0) { //If at least 1 face is detected: 
    for (f=0; f < detections.length; f++){
      let points = detections[f].landmarks.positions;
      for (let i = 0; i < points.length; i++) {
        stroke(0, 255, 0);
        strokeWeight(3);
        square(points[i]._x, points[i]._y,2);
      }
    }
  }
}

function drawExpressions(detections, x, y, textYSpace){
  if(detections.length > 0){ //If at least 1 face is detected
    let {neutral, happy, angry, sad, disgusted, surprised, fearful} = detections[0].expressions;
    textFont('Helvetica Neue');
    textSize(14);
    noStroke();
    fill(0, 255, 0);

    text("neutral:       " + nf(neutral*100, 2, 2)+"%", x, y);
    text("happiness: " + nf(happy*100, 2, 2)+"%", x, y+textYSpace);
    text("anger:        " + nf(angry*100, 2, 2)+"%", x, y+textYSpace*2);
    text("sad:            "+ nf(sad*100, 2, 2)+"%", x, y+textYSpace*3);
    text("disgusted: " + nf(disgusted*100, 2, 2)+"%", x, y+textYSpace*4);
    text("surprised:  " + nf(surprised*100, 2, 2)+"%", x, y+textYSpace*5);
    text("fear:           " + nf(fearful*100, 2, 2)+"%", x, y+textYSpace*6);
  } else { //If no faces is detected
    text("neutral: ", x, y);
    text("happiness: ", x, y + textYSpace);
    text("anger: ", x, y + textYSpace*2);
    text("sad: ", x, y + textYSpace*3);
    text("disgusted: ", x, y + textYSpace*4);
    text("surprised: ", x, y + textYSpace*5);
    text("fear: ", x, y + textYSpace*6);
  }
}
