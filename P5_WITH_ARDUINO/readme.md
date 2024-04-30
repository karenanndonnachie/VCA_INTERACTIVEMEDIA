# HOW TO GET P5 TO PLAY WITH ARDUINO (OR ARDUINO TO EXTEND P5)

## FIRST INSTALL THE APP P5 SERIAL CONTROL (MAC OR WINDOWS)
[P5.SERIALCONTROL](https://github.com/p5-serial/p5.serialcontrol/releases/tag/0.1.2)

## THEN DOWNLOAD THE P5.SERIAL LIBRARY (ADD TO YOUR P5 SKETCH)
[p5.serialserver library](https://github.com/p5-serial/p5.serialserver)
<img width="456" alt="Screenshot 2024-04-30 at 16 25 56" src="https://github.com/karenanndonnachie/VCA_INTERACTIVEMEDIA/assets/10482948/0a5f6c01-a33f-4750-bc06-c5db5bd30d24">

[more information on the p5js.org site](https://p5js.org/libraries/)

# CODE AN ARDUINO TO MAKE DATA
## Try the following code on your Arduino
<pre>#### #include <Servo.h>

void setup() {
  Serial.begin(9600); // initialize serial communications
}
 
void loop() {
  // read the input pin:
  int potentiometer = analogRead(A0);                  
  // remap the pot value to fit in 1 byte:
  int mappedPot = map(potentiometer, 0, 1023, 0, 255); 
  // print it out the serial port:
  Serial.write(mappedPot);                             
  // slight delay to stabilize the ADC:
  delay(1000);                                            
}
</pre>
Then using the SerialPort app, you can scan for your Arduino when it is connected (and pre-coded with the following:
