#include <aREST.h>
#include <Servo.h>

aREST rest = aREST();

Servo servo1;
Servo servo2;

int leftEye = 3;

int rightEye1 = 2;
int rightEye2 = 4;
int rightEye3 = 5;
int sadMouthPin = 6;
int happyMouthPin = 7;
int mouthPin = 8;

void setup() {
  pinMode(leftEye, OUTPUT);

  pinMode(rightEye1, OUTPUT);
  pinMode(rightEye2, OUTPUT);
  pinMode(rightEye3, OUTPUT);

  pinMode(sadMouthPin, OUTPUT);
  pinMode(happyMouthPin, OUTPUT);
  pinMode(mouthPin, OUTPUT);

  servo1.attach(10);
  servo2.attach(9);
  
  Serial.begin(115200);

  rest.function("ledBlinkLeftEye", ledBlinkLeftEye);

  rest.function("ledRandomRightEye", ledRandomRightEye);

  rest.function("happyEyebrows", happyEyebrows);
  rest.function("sadEyebrows", sadEyebrows);

  rest.function("mouthAll", mouthAll);

  rest.set_id("001");
  rest.set_name("arduino_control");
}

void loop() {
  rest.handle(Serial);
}

int ledBlinkLeftEye() {
  digitalWrite(leftEye, HIGH);
  delay(500);
  digitalWrite(leftEye, LOW);
  delay(500);
}

int ledRandomRightEye() {
  digitalWrite(rightEye1, HIGH);
  digitalWrite(rightEye2, LOW); 
  digitalWrite(rightEye3, LOW); 
  delay(500);
  digitalWrite(rightEye2, HIGH);
  digitalWrite(rightEye1, LOW); 
  digitalWrite(rightEye3, LOW); 
  delay(500);
  digitalWrite(rightEye3, HIGH);
  digitalWrite(rightEye1, LOW);
  digitalWrite(rightEye2, LOW);
  delay(500);
}

int mouthAll() {
  digitalWrite(sadMouthPin, HIGH);
  digitalWrite(happyMouthPin, HIGH);
  digitalWrite(mouthPin, HIGH);
}

int happyEyebrows() {
  servo1.write(90);
  servo2.write(90);
}

int sadEyebrows() {
  servo1.write(120);
  servo2.write(70);
}
