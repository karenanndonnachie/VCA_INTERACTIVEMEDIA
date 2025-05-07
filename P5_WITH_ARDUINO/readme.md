# HOW TO GET P5 TO PLAY WITH ARDUINO (OR ARDUINO TO EXTEND P5)

## FIRST DOWNLOAD THE ZIP FILE AND UNPACK TO YOUR PROCESSING FOLDER (USUALLY IN YOUR DOCUMENTS)
[ARDUINO<-->p5js](INT_MEDIA_2025_ARDUINO_SUPERSERIAL.zip)<br>
### NOTE THAT YOUR P5 SKETCH HAS A LINK TO A CDN OF serial.js<br>
(you can also find it in this directory and you can load it locally if you like)

## THEN BUILD YOUR CIRCUIT & UPLOAD THE ARDUINO CODE TO YOUR ARDUINO
<pre>Try hooking up an Arduino with a Potentiometer 
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
</pre>
***************************

## Then using the SerialPort app, you can scan for your Arduino when it is connected (and pre-coded with the potentiometer code)
FIND THE PORT AND USE THE PORT NUMBER /NAME IN YOUR P5JS SKETCH

