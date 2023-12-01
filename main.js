// Circle Collide Challenge Easy

// Canvas
let cnv = document.getElementById("draw");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;

// Variables
let mouseX = 0,
  mouseY = 0;

// mouse move handler
document.addEventListener("mousemove", mousemoveHandler);
function mousemoveHandler(e) {
  let cnvRect = cnv.getBoundingClientRect();

  mouseX = e.clientX - cnvRect.left;
  mouseY = e.clientY - cnvRect.top;
}

let circleSize = 15;
let orangeCircleX = 400;
let orangeCircleY = 300;
let orangeCircleSize = 50;
// Loop

requestAnimationFrame(loop);
function loop() {
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, 800, 600);

  // Circle
  ctx.lineWidth = 5;
  ctx.fillStyle = "orange";
  ctx.beginPath();
  ctx.arc(orangeCircleX, orangeCircleY, orangeCircleSize, 0, 2 * Math.PI);

  ctx.fill();
  // white
  ctx.lineWidth = 4;
  ctx.strokeStyle = "white";
  ctx.beginPath();
  ctx.arc(orangeCircleX, orangeCircleY, orangeCircleSize, 0, 2 * Math.PI);
  ctx.stroke();
  // black
  ctx.lineWidth = 2;
  ctx.strokeStyle = "black";
  ctx.beginPath();
  ctx.arc(orangeCircleX, orangeCircleY, orangeCircleSize, 0, 2 * Math.PI);
  ctx.stroke();
  // Mouse Circle

  ctx.lineWidth = 4;
  ctx.fillStyle = "aqua";
  ctx.beginPath();
  ctx.arc(mouseX, mouseY, circleSize, 0, 2 * Math.PI);
  ctx.fill();

  // white
  ctx.lineWidth = 3;
  ctx.strokeStyle = "white";
  ctx.beginPath();
  ctx.arc(mouseX, mouseY, circleSize, 0, 2 * Math.PI);
  ctx.stroke();

  // black
  ctx.lineWidth = 2;
  ctx.strokeStyle = "black";
  ctx.beginPath();
  ctx.arc(mouseX, mouseY, circleSize, 0, 2 * Math.PI);
  ctx.stroke();

  // logic

  let distance = Math.sqrt(
    (mouseX - orangeCircleX) ** 2 + (mouseY - orangeCircleY) ** 2
  );

  if (orangeCircleSize + circleSize >= distance) {
    orangeCircleX = Math.random() * 750;
    orangeCircleY = Math.random() * 550;
  }

  requestAnimationFrame(loop);
}
