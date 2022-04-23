/// <reference path='./TSDef/p5.global-mode.d.ts' />

"use strict;";
function setup() {
  createCanvas(700, 700);
  angleMode(DEGREES);
}

function draw() {
  background(150, 50, 20, 80);
  noFill();
  stroke(255);
  strokeWeight(5);

  translate(width / 2, height / 2);

  for (let n = 0; n < 8; n++) {
    stroke();
    beginShape();
    for (let i = 0; i < 360; i += 10) {
      const rad = map(sin(i * 3 + frameCount), -1, 1, 100, 300);
      const x = rad * cos(i);
      const y = rad * sin(i);
      vertex(x, y);
    }
    endShape(CLOSE);
    rotate(frameCount / 10);
  }
}
