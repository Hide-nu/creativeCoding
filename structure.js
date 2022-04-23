/// <reference path="./TSDef/p5.global-mode.d.ts" />

"use strict";
function setup() {
  createCanvas(400, 400, WEBGL);
  angleMode(DEGREES);
}

function draw() {
  background(30);
  rotateX(60);

  noFill();
  stroke(255);

  for (let i = 0; i < 50; i++) {
    const r = map(sin(frameCount), -1, 1, 0, 255);
    const g = map(i, 0, 20, 0, 255);
    const b = map(cos(frameCount), -1, 1, 255, 0);
    stroke(r, g, b);

    rotate(frameCount / 100);

    beginShape();
    for (let j = 0; j < 360; j += 60) {
      let rad = i * 3;
      let x = rad * cos(j);
      let y = rad * sin(j);
      let z = sin(frameCount * 2 + i * 5) * 50;

      vertex(x, y, z);
    }
    endShape(CLOSE);
  }
}
