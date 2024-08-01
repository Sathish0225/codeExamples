var canvas = document.querySelector("canvas");
var ctx = canvas.getContext("2d");

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

window.addEventListener("resize", resizeCanvas);
resizeCanvas();

var an = 0.04,
  k = -0.07,
  no = 5;

function animate() {
  an = an + k;
  var x =
    canvas.width / 2 +
    ((canvas.width - 25) / 2) * Math.sin(an) * Math.sin(an) * Math.sin(an);
  var y = -(
    -canvas.height / 2 +
    13 *
      (13 * Math.cos(an) -
        5 * Math.cos(2 * an) -
        2 * Math.cos(3 * an) -
        Math.cos(4 * an))
  );

  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.strokeStyle = "hsl(" + (360 * Math.random()).toFixed(2) + ", 100%, 50%)";
  for (var a = 0; a < 2 * Math.PI; a += 0.01) {
    var xt = x + 8 * Math.cos(no * a) * Math.cos(a);
    var yt = y + 8 * Math.cos(no * a) * Math.sin(a);
    ctx.lineTo(xt, yt);
  }
  ctx.stroke();
  ctx.closePath();

  ctx.beginPath();
  ctx.moveTo(canvas.width / 2, canvas.height / 2);
  ctx.lineTo(x, y);
  ctx.stroke();
  ctx.closePath();

  if (an > 6.5) {
    k = -0.07;
    no = Math.floor(Math.random() * 9) + 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }

  if (an < -0.07) {
    k = 0.07;
    no = Math.floor(Math.random() * 9) + 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }

  requestAnimationFrame(animate);
}

requestAnimationFrame(animate);
