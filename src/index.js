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
