# Merging code
## Most of the time we will need to take two (or more) separate snippets of code and weave or merge them together.
* Copy and paste the code(s) to a text-friendly app (like notes or Atom)
* Find & highlight your functions
* Find & Highlight your variables ==> *you must not use the same name for more than one thing*
* Make sure there are NO DUPLICATE FUNCTIONS --> YOU CAN ONLY HAVE ONE setup() and one loop() function
* Make your if else statements talk to each other
<br/>
## Let's try it ~ FOR ARDUINO ~ {p5 version below}!
We will merge our 'Blink' sketch and a 'Fade' sketch
### Blink (flashes built-in LED):
<pre>
void setup() {
  pinMode(LED_BUILTIN, OUTPUT);
}

void loop() {
  digitalWrite(LED_BUILTIN, HIGH);   // turn the LED on (HIGH is the voltage level)
  delay(1000);                       // wait for a second
  digitalWrite(LED_BUILTIN, LOW);    // turn the LED off by making the voltage LOW
  delay(1000);                       // wait for a second
}
</pre>
### Fade (fades an LED on pin 9):
<pre>

int led = 9;           // the PWM pin the LED is attached to
int brightness = 0;    // how bright the LED is
int fadeAmount = 5;    // how many points to fade the LED by

void setup() {
  pinMode(led, OUTPUT);
}

void loop() {
  analogWrite(led, brightness);
  brightness = brightness + fadeAmount;
  if (brightness <= 0 || brightness >= 255) {
    fadeAmount = -fadeAmount;
  }
  delay(30);
}
</pre>
& merged
<pre>
#include <Servo.h>
Servo myservo;  
int pos = 0; // variable to store the servo position

const int ledPin =  LED_BUILTIN;
int ledState = LOW; 
unsigned long previousMillis = 0;        
const long interval = 1000; 
        
void setupBlink() {
  pinMode(ledPin, OUTPUT);
}
void setup() {
  myservo.attach(9);
  setupBlink();
}

void loopBlink() {
  unsigned long currentMillis = millis();
  if (currentMillis - previousMillis >= interval) {
    previousMillis = currentMillis;
    if (ledState == LOW) {
      ledState = HIGH;
    } else {
      ledState = LOW;
    }
    digitalWrite(ledPin, ledState);
  }
}

void loop() {
  for (pos = 0; pos <= 180; pos += 1) { 
    myservo.write(pos);
    loopBlink();              
    delay(5); 
  }
  
for (pos = 180; pos >= 0; pos -= 1) { 
    myservo.write(pos); 
    loopBlink();
    delay(5);
  }
}
    </pre>
[This extended tutorial](https://en.wikiversity.org/wiki/Arduino_Sketch_Merge) can explain in more detail.

# For P5js it is very similar... !! you can only have 1 `function setup()` and 1 `function draw()` !!
## But! there is nothing stopping you from having `function setup()` and `function setup_2()` 
## Let's say we want to combine our 'rainbow caterpillar sketch' with another 'hello world' p5js sketch....
so this + this
<img width="600" height="320" alt="chrome-capture-2026-05-12 (1)" src="https://github.com/user-attachments/assets/2815d143-4761-4e35-a6d4-36577da20201" />
<img width="600" height="320" alt="chrome-capture-2026-05-12" src="https://github.com/user-attachments/assets/b014dd74-56d1-4127-a0ae-7cbf50fab422" />

<table><tr><td>
<pre>
  //Rainbow Caterpillar
  function setup(){
    createCanvas(windowWidth, windowHeight);
    background(0);
    
  }
  function draw() {
    colorMode(HSB);
    let circleHue = map(mouseX, 0, width, 0, 360);
    fill(circleHue, 100, 100);
    circle(mouseX, mouseY, 80);
  }
</pre>
</td><td>
  <pre>
//Hello World!
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255, 255, 0);
  rectMode(CENTER);
  //frameRate(5);
  textSize(90);
  textAlign(CENTER);
  fill("orange");
  angleMode(DEGREES);
}
function draw() {
  background(255, 24);
  push(); //setting temporary values
    translate(width/2, height/2);
    rotate(width/2-mouseX);
    strokeWeight(4);
    stroke(255);
    fill(0);
    text("HELLO WORLD", 0, 0);
  pop();
  fill(random(255), random(255), random(255));
  circle (random(width), random(height), random(120));
}
  </pre>
</td>
</tr>
<tr><td>
  <pre>//Rainbow Caterpillar MERGED WITH HELLO WORLD!
  function setup(){
    createCanvas(windowWidth, windowHeight);
    background(0);
    setup_2();
  }
  function draw() {
    colorMode(HSB);
    let circleHue = map(pmouseX, 0, width, 0, 360);
    fill(circleHue, 100, 100);
    circle(mouseX, mouseY, 80);
    draw_2();
  }</pre><pre>function setup_2() {
    //createCanvas(windowWidth, windowHeight);
    //background(255, 255, 0);
    rectMode(CENTER);
    textSize(90);
    textAlign(CENTER);
    fill("orange");
    angleMode(DEGREES);
  }
</pre><pre>
  function draw_2() {
    //background(255, 24);
    push(); //setting temporary values
      colorMode(RGB);
      translate(width/2, height/2);
      rotate(width/2-mouseX);
      stroke(255);
      strokeWeight(4);
      fill(0);
      text("HELLO WORLD", 0, 0);
    pop();
  fill(random(255), random(255), random(255));
  circle (random(width), random(height), random(120));
}
</pre>
</td>
<td>
  <pre>//Rainbow Caterpillar MERGED WITH HELLO WORLD
<-- <mark>ORIGINAL function setup(){</mark>
    createCanvas(windowWidth, windowHeight);
    background(0);
+<-- THEN call <b> setup_2(); </b>
  }
  
  <-- leave ORIGINAL function draw() {
    colorMode(HSB);
    let circleHue = map(pmouseX, 0, width, 0, 360);
    fill(circleHue, 100, 100);
    circle(mouseX, mouseY, 80);
   <-- THEN CALL <b>draw_2(); </b>
  }</pre><pre><-- ADD THE OTHER SETUP() BUT CHANGE THE NAME!! 
<b>function setup_2()</b> {
  <-- ONLY NEED ONE canvas call so comment out <b>//</b>createCanvas(windowWidth, windowHeight);
  <-- ALSO ONLY NEED ONE BG <b>//</b>background(255, 255, 0);
  rectMode(CENTER);
  textSize(90);
  textAlign(CENTER);
  fill("orange");
  angleMode(DEGREES);
}

<-- ADD YOUR <b>function draw_2()</b> {
<-- DON'T DOUBLE BG, so comment out  <mark>//background(255, 24);</mark>
  push(); //setting temporary values
<-- NEED TO FLIP BACK TO RGB <mark>colorMode(RGB);</mark>
    translate(width/2, height/2);
    rotate(width/2-mouseX);
    stroke(255);
    strokeWeight(4);
    fill(0);
    text("HELLO WORLD", 0, 0);
  pop();
  fill(random(255), random(255), random(255));
  circle (random(width), random(height), random(120));
}</pre></td></tr></table>
# AND you should get something like this:
<img width="500" height="266" alt="chrome-capture-2026-05-12 (2)" src="https://github.com/user-attachments/assets/4d44b636-96b7-4d38-b5a9-7d6fbc62f013" />
