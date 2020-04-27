import { createCanvas } from "./canvas-helpers";

(() => {
  let ctx = createCanvas("Draw a Line");
  //1. Set the line style options
  ctx.strokeStyle = "black";
  ctx.lineWidth = 10;
  ctx.lineCap = "square";

  //2. Draw the line
  ctx.beginPath();
  ctx.moveTo(10, 10);
  ctx.lineTo(128, 128);
  ctx.stroke();
})();

(() => {
  let ctx = createCanvas("Path");

  //Set the line and fill style options
  ctx.strokeStyle = "black";
  ctx.lineWidth = 3;
  ctx.fillStyle = "rgba(128, 128, 128, 0.5)";
  //Connect lines together to form a triangle in the center of the canvas
  ctx.beginPath();
  ctx.moveTo(128, 85);
  ctx.lineTo(170, 170);
  ctx.lineTo(85, 170);
  ctx.lineTo(128, 85);
  ctx.fill();
  ctx.stroke();
})();

(() => {
  let ctx = createCanvas("Path from Array");

  let triangle = [
    [28, 85],
    [170, 170],
    [85, 170],
  ];

  function drawPath(shape) {
    //Start drawing from the last point
    let lastPoint = shape.length - 1;
    ctx.moveTo(shape[lastPoint][0], shape[lastPoint][1]);
    //Use a loop to plot each point
    shape.forEach((point) => {
      ctx.lineTo(point[0], point[1]);
    });
  }

  ctx.beginPath();
  ctx.lineJoin = "bevel";
  drawPath(triangle);
  ctx.stroke();
  ctx.fill();
})();

(() => {
  let ctx = createCanvas("Rectangle");

  //Set the line and fill style options
  ctx.strokeStyle = "black";
  ctx.lineWidth = 3;
  ctx.fillStyle = "rgba(128, 128, 128, 0.5)";
  //Draw the rectangle
  ctx.beginPath();
  ctx.rect(50, 40, 70, 90);
  ctx.stroke();
  ctx.fill();
})();

(() => {
  let ctx = createCanvas("Rectangle with Fill");

  ctx.strokeStyle = "black";
  ctx.lineWidth = 3;
  ctx.strokeRect(110, 170, 100, 50);
  ctx.fillRect(110, 170, 100, 50);
})();

(() => {
  let ctx = createCanvas("Linear Gradient");

  //Set the line style options
  ctx.strokeStyle = "black";
  ctx.lineWidth = 3;
  //Create a linear gradient
  let gradient = ctx.createLinearGradient(64, 64, 192, 192);
  gradient.addColorStop(0, "white");
  gradient.addColorStop(1, "black");
  ctx.fillStyle = gradient;
  //Draw the rectangle
  ctx.beginPath();
  ctx.rect(64, 64, 128, 128);
  ctx.stroke();
  ctx.fill();
})();

(() => {
  let ctx = createCanvas("Radial Gradient");

  //Set the line style options
  ctx.strokeStyle = "black";
  ctx.lineWidth = 3;
  //Create a linear gradient
  let gradient = ctx.createRadialGradient(128, 128, 10, 128, 128, 96);
  gradient.addColorStop(0, "white");
  gradient.addColorStop(1, "black");
  ctx.fillStyle = gradient;
  //Draw the rectangle
  ctx.beginPath();
  ctx.rect(64, 64, 128, 128);
  ctx.stroke();
  ctx.fill();
})();

(() => {
  let ctx = createCanvas("Circle");

  ctx.strokeStyle = "black";
  ctx.lineWidth = 3;

  let gradient = ctx.createRadialGradient(96, 96, 12, 128, 128, 96);
  gradient.addColorStop(0, "white");
  gradient.addColorStop(1, "black");
  ctx.fillStyle = gradient;

  ctx.beginPath();
  ctx.arc(128, 128, 64, 0, 2 * Math.PI, false);
  ctx.stroke();
  ctx.fill();
})();

(() => {
  let ctx = createCanvas("Arc");

  ctx.strokeStyle = "black";
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.arc(128, 128, 64, 0, 1, false);
  ctx.stroke();
})();

(() => {
  let ctx = createCanvas("Quadratic Curve");

  ctx.strokeStyle = "black";
  ctx.lineWidth = 3;
  ctx.moveTo(32, 128);
  ctx.quadraticCurveTo(128, 20, 224, 128);
  ctx.stroke();
})();

(() => {
  let ctx = createCanvas("Bezier Curve");

  ctx.strokeStyle = "black";
  ctx.lineWidth = 3;
  ctx.moveTo(32, 128);
  ctx.bezierCurveTo(32, 20, 224, 20, 224, 128);
  ctx.stroke();
})();

(() => {
  let ctx = createCanvas("Shadow");

  ctx.shadowColor = "rgba(128, 128, 128, 0.8)";
  ctx.shadowOffsetX = 10;
  ctx.shadowOffsetY = 10;
  ctx.shadowBlur = 10;

  ctx.strokeStyle = "black";
  ctx.lineWidth = 3;

  let gradient = ctx.createRadialGradient(96, 96, 12, 128, 128, 96);
  gradient.addColorStop(0, "white");
  gradient.addColorStop(1, "black");
  ctx.fillStyle = gradient;

  ctx.beginPath();
  ctx.arc(128, 128, 64, 0, 2 * Math.PI, false);
  ctx.stroke();
  ctx.fill();
})();

(() => {
  let ctx = createCanvas("Rotation");

  ctx.strokeStyle = "black";
  ctx.lineWidth = 3;
  ctx.fillStyle = "rgba(128, 128, 128, 0.5)";

  // save the current state of the drawing context before it's rotated
  ctx.save();

  //Shift the drawing context's 0,0 point from the canvas's top left
  //corner to the center of the canvas. This will be the
  //square's center point
  ctx.translate(128, 128);

  //Rotate the drawing context's coordinate system 0.5 radians
  ctx.rotate(0.5);

  //Draw the square from -64 x and -64 y. That will mean its center
  //point will be at exactly 0, which is also the center of the
  //context's coordinate system
  ctx.beginPath();
  ctx.rect(-64, -64, 128, 127);
  ctx.stroke();
  ctx.fill();

  // Restore the drawing context to
  //its original position and rotation
  ctx.restore();
})();

(() => {
  let ctx = createCanvas("Centered Square");

  ctx.strokeStyle = "black";
  ctx.lineWidth = 2;
  ctx.fillStyle = "rgba(128, 128, 128, 0.5)";

  ctx.save();

  ctx.translate(128, 128);

  ctx.beginPath();
  ctx.rect(-50, -50, 100, 100);
  ctx.stroke();
  ctx.fill();

  ctx.restore();
})();

(() => {
  let ctx = createCanvas("Scale 0.5x");

  ctx.strokeStyle = "black";
  ctx.lineWidth = 2;
  ctx.fillStyle = "rgba(128, 128, 128, 0.5)";

  ctx.save();

  ctx.translate(128, 128);
  ctx.scale(0.5, 0.5);

  ctx.beginPath();
  ctx.rect(-50, -50, 100, 100);
  ctx.stroke();
  ctx.fill();

  ctx.restore();
})();

(() => {
  let ctx = createCanvas("Scale 2x");

  ctx.strokeStyle = "black";
  ctx.lineWidth = 2;
  ctx.fillStyle = "rgba(128, 128, 128, 0.5)";

  ctx.save();

  ctx.translate(128, 128);
  ctx.scale(2, 2);

  ctx.beginPath();
  ctx.rect(-50, -50, 100, 100);
  ctx.stroke();
  ctx.fill();

  ctx.restore();
})();

(() => {
  let ctx = createCanvas("Transparency");

  ctx.save();
  ctx.fillStyle = "blue";
  ctx.globalAlpha = 0.5;
  ctx.beginPath();
  ctx.rect(45, 45, 100, 100);
  ctx.fill();
  ctx.restore();

  ctx.save();
  ctx.fillStyle = "red";
  ctx.globalAlpha = 0.5;
  ctx.beginPath();
  ctx.arc(150, 150, 64, 0, 2 * Math.PI, false);
  ctx.fill();
  ctx.restore();
})();

(() => {
  let ctx = createCanvas("Multiply Blend Mode");
  ctx.globalCompositeOperation = "multiply";

  ctx.save();
  ctx.fillStyle = "blue";
  ctx.globalAlpha = 0.5;
  ctx.beginPath();
  ctx.rect(45, 45, 100, 100);
  ctx.fill();
  ctx.restore();

  ctx.save();
  ctx.fillStyle = "red";
  ctx.globalAlpha = 0.5;
  ctx.beginPath();
  ctx.arc(150, 150, 64, 0, 2 * Math.PI, false);
  ctx.fill();
  ctx.restore();
})();

(() => {
  let ctx = createCanvas("Lighten Blend Mode");
  ctx.globalCompositeOperation = "lighten";

  ctx.save();
  ctx.fillStyle = "blue";
  ctx.globalAlpha = 0.5;
  ctx.beginPath();
  ctx.rect(45, 45, 100, 100);
  ctx.fill();
  ctx.restore();

  ctx.save();
  ctx.fillStyle = "red";
  ctx.globalAlpha = 0.5;
  ctx.beginPath();
  ctx.arc(150, 150, 64, 0, 2 * Math.PI, false);
  ctx.fill();
  ctx.restore();
})();

(() => {
  let ctx = createCanvas("source-out Comp");
  ctx.globalCompositeOperation = "source-out";

  ctx.fillStyle = "blue";
  ctx.beginPath();
  ctx.rect(45, 45, 100, 100);
  ctx.fill();

  ctx.fillStyle = "red";
  ctx.beginPath();
  ctx.arc(150, 150, 64, 0, 2 * Math.PI, false);
  ctx.fill();
})();

(() => {
  let ctx = createCanvas("XOR Comp");
  ctx.globalCompositeOperation = "xor";

  ctx.save();
  ctx.fillStyle = "blue";
  ctx.beginPath();
  ctx.rect(45, 45, 100, 100);
  ctx.fill();
  ctx.restore();

  ctx.save();
  ctx.fillStyle = "red";
  ctx.beginPath();
  ctx.arc(150, 150, 64, 0, 2 * Math.PI, false);
  ctx.fill();
  ctx.restore();
})();
