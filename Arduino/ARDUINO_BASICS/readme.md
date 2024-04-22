# Arduino Basics
## In this folder we will keep some of the more simple sketches & circuits for Arduino

# Wot is Arduino?
<img width="781" alt="Screenshot 2024-04-15 at 12 00 08" src="https://github.com/karenanndonnachie/VCA_INTERACTIVEMEDIA/assets/10482948/cdc112e7-5465-448a-893c-a44c800dd1a3">

### Arduino is an open-source electronics prototyping platform based on flexible, easy-to-use hardware and software. It's intended for artists, designers, hobbyists, and anyone interested in creating interactive objects or environments. Or more simply, you load on some code and it can read sensors, perform actions based on inputs from buttons, control motors, and accept shields to further expand it's capabilities. Really, you can do almost anything.

All Arduino boards have one thing in common: they are programmed through the Arduino IDE. This is the software that allows you to write and upload code. Beyond that, there can be a lot of differences. The number of inputs and outputs (how many sensors, LEDs, and buttons you can use on a single board), speed, operating voltage, and form factor are just a few of the variables. Some boards are designed to be embedded and have no programming interface (hardware) which you would need to buy separately. Some can run directly from a 3.7V battery, others need at least 5V.

How to choose the right Arduino?	https://learn.sparkfun.com/tutorials/choosing-an-arduino-for-your-project/all
# Wot do I do with Arduino?
## This is a snapshot of the most common Arduino compatible components. They can do all sorts of things from 'sensing' to making light & noise, they can make things move 'see' hear and 'sing', measure our surroundings and communicate it back to us.

<img width="506" alt="Screenshot 2024-04-15 at 11 49 45" src="https://github.com/karenanndonnachie/VCA_INTERACTIVEMEDIA/assets/10482948/3f9c9877-f52a-49e9-86fe-209d91c7d10e">

# How do I make Arduino go?
## Start by downloading the Arduino IDE (available at [arduino.cc](arduino.cc) for your laptop or desktop device. You need to plug in your Arduino via USB and choose the board "Arduino UNO" and the port (USB1211 or other for mac / Com Port3 or similar for windows). You will see already that the Arduino editing pane has two functions `void setup() {}` and `void loop() {}` the setup function is where you set variables and values including setting Arduino's pins as `INPUT` or `OUTPUT`.

An `INPUT` in Arduino circuits can be the value read by a sensor or an interactive element such as a button or switch. `OUTPUT` refers to a component that receives a signal from Arduino such as an LED light, a motor or a Buzzer.

Try opening an example sketch by going to the menu... File/Examples/Basic/Blink This sketch "Blink" doesn't need any extra components, it will literally make the onboard LED flash on for one second (1000 milliseconds) and then switch off for 1 second. The timing is set with the `delay()` function that temporarily stops the Arduino from looping. Have a read of the comments and the code. Then click on the `verify` button to check that the code is ok. If it all looks fine, upload the code to your Arduino with the `upload` function. You should see your board now flashes for one second, then pauses, then flashes.

### To keep track of what our components can do, we are building a knowledge repository in this directory. See each folder for sample code, wiring image and build notes.

### 1. [Push-button LED](https://github.com/karenanndonnachie/VCA_INTERACTIVEMEDIA/tree/main/Arduino/ARDUINO_BASICS/1.%20PUSH_BUTTTON_LED)
### 2. [POTENTIOMETER_LED](2.%20POTENTIOMETER_LED/)
### 3. [Blink without delay()](3.BLINK_STATE_NO_DELAY/)
### 4. [Theremin](4.THEREMIN/)
### 5. [Ultrasonic Distance Sensor w/buzzer](5.ULTRASONIC_BUZZER/)
### etc...
