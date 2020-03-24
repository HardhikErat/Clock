function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  stroke("black");
  ellipse(100, 100);
}

function draw() {
  background(255);
  translate(200, 200);
  rotate(-90);

  let hr = hour();
  let mn = minute();
  let sc = second();

  strokeWeight(8);
  stroke(255, 100, 150);
  noFill();
  let secondAngle = map(sc, 0, 60, 0, 360);
  //arc(0, 0, 300, 300, 0, secondAngle);

  stroke(150, 100, 255);
  let minuteAngle = map(mn, 0, 60, 0, 360);
  //arc(0, 0, 280, 280, 0, minuteAngle);

  stroke(150, 255, 100);
  let hourAngle = map(hr % 12, 0, 12, 0, 360);
  //arc(0, 0, 260, 260, 0, hourAngle);

  push();
  rotate(secondAngle);
  stroke(255, 100, 150);
  line(0, 0, 100, 0);
  pop();

  push();
  rotate(minuteAngle);
  stroke(150, 100, 255);
  line(0, 0, 75, 0);
  pop();

  push();
  rotate(hourAngle);
  stroke(150, 255, 100);
  line(0, 0, 50, 0);
  pop();

  stroke(255);
  point(0, 0);
  
  fill("black");
  rotate(90);
  textSize(20);
  text("9", -130, 10);
  
  fill("black");
  rotate(0);
  textSize(20);
  text("12", -8, -110);
  
  fill("black");
  rotate(0);
  textSize(20);
  text("6", -6, 123);
  
  fill("black");
  rotate(0);
  textSize(20);
  text("3", 120, 10);
  
  fill("black");
  rotate(0);
  textSize(20);
  text("1", 60, -85);
  
  fill("black");
  rotate(0);
  textSize(20);
  text("2", 100, -40);
  
  fill("black");
  rotate(0);
  textSize(20);
  text("4", 100, 73);
  
  fill("black");
  rotate(0);
  textSize(20);
  text("5", 50, 115);
  
  fill("black");
  rotate(0);
  textSize(20);
  text("7", -65, 120);
  
  fill("black");
  rotate(0);
  textSize(20);
  text("8", -113, 73);
  
  fill("black");
  rotate(0);
  textSize(20);
  text("10", -120, -50);
  
  fill("black");
  rotate(0);
  textSize(20);
  text("11", -75, -95);
}