/*
This is a P5js sketch that works 
by reading the Serial connected Arduino or similar.
Try hooking up an Arduino with a Potentiometer 
    |=|    
    |=|
  ———————
  |  |  |
 GND A0 5V
and on the Arduino load up this code (or similar):
***************************
//TO BE UPLOADED TO ARDUINO

void setup() {
  Serial.begin(9600); // initialize serial communications
}
 
void loop() {
  // read the input pin:
  int potentiometer = analogRead(A0);                  
  // remap the pot value to fit in 1 byte:
  int mappedPot = map(potentiometer, 0, 1023, 0, 255); 
  // print it out the serial port:
  Serial.println(mappedPot);                             
  // slight delay to stabilize the ADC:
  delay(50);                                            
}
***************************
*/

let msg;
let serialOptions = { baudRate: 9600 };
let serial;
let isConnected = false;
let dataIn = 0;
let textY = 40;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(100);
  textFont('Courier New');
  textSize(20);
  // Setup Web Serial using serial.js
  // remember to include the library in index.html:   <script src="https://cdn.jsdelivr.net/gh/makeabilitylab/p5js/_libraries/serial.js"></script>
  serial = new Serial();
  serial.on(SerialEvents.CONNECTION_OPENED, onSerialConnectionOpened);
  serial.on(SerialEvents.CONNECTION_CLOSED, onSerialConnectionClosed);
  serial.on(SerialEvents.DATA_RECEIVED, onSerialDataReceived);
  serial.on(SerialEvents.ERROR_OCCURRED, onSerialErrorOccurred);
  msg = "Not connected";
}

function draw() {
  let mappedData=map(dataIn, 0, 255, 0, height);
  background(dataIn);
  fill(0,255,0);
  circle(width/2, height/2, mappedData);
  text(msg,40,textY)
}

function mouseMoved() {
  let mapedX = map(mouseX,0,width,0,255);
  mapedX = floor(mapedX);
  let mapedY = map(mouseY,0,height,0,255);
  mapedY = floor(mapedY);
  serialWriteArrayData([mapedX, mapedY]);
}

function mouseClicked() {
  if (!isConnected) {
    isConnected = connectPort(); 
  }
}

async function connectPort() {
  if (!serial.isOpen()) {
    await serial.connectAndOpen(null, serialOptions);
  } else {
    serial.autoConnectAndOpenPreviouslyApprovedPort(serialOptions);
    return true;
  }
}

 function onSerialErrorOccurred(eventSender, error) {
  console.log("onSerialErrorOccurred", error);
  msg = "Serial Error Occurred!";
}

function onSerialConnectionOpened(eventSender) {
  console.log("Serial connection opened successfully");
  msg = "🌈 connected!";
}

function onSerialConnectionClosed(eventSender) {
  console.log("onSerialConnectionClosed");
  msg = "Connection Closed!";
}

function onSerialDataReceived(eventSender, newData) {
  console.log("onSerialDataReceived", newData);
  msg = "Received: " + newData;
  dataIn = int(newData); // safely update dataIn
}
 
async function serialWriteArrayData(data) {
  if (serial.isOpen()) {
    let dataFormated = "";
    for(i=0;i<data.length;i++) {
      dataFormated +=data[i];
      dataFormated += ",";
    }
    console.log("send data: "+dataFormated)
        serial.writeLine(dataFormated);
  }
}
