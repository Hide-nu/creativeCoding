/// <reference path='./TSDef/p5.global-mode.d.ts' />

"use strict;";
function setup() {
  createCanvas(400, 400, WEBGL);
  angleMode(DEGREES);
}

function draw() {
  background(30);

  noFill();
  stroke(255);

  rotateX(frameCount);

  for (let i = 0; i < 360; i++) {
    push();

    let r = map(sin(i * frameCount), -1, 1, 200, 50);
    let g = map(cos((i * frameCount) / 3), -1, 1, 50, 200);
    let b = map(sin((i * frameCount) / 7), -1, 1, 50, 200);

    stroke(r, g, b);

    rotateY(i / 2);

    ellipse(0, 0, 200);

    pop();
  }
}
