/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!************************************!*\
  !*** ./resources/js/background.js ***!
  \************************************/
function launch() {
  var canvas = document.getElementById('background');
  var ctx = canvas.getContext('2d');
  canvas.width = canvas.clientWidth;
  canvas.height = canvas.clientHeight;
  var ratio = canvas.width / canvas.height;
  var stars = [];
  var mouseX = null;
  var mouseY = null;

  window.onresize = e => {

    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;
  }
  document.onmousemove = function (evt) {
    var rect = canvas.getBoundingClientRect();
    mouseX = (evt.clientX - rect.left) / canvas.width * 100;
    mouseY = (evt.clientY - rect.top) / canvas.height * 100;
  };

  for (var i = 0; i < 150; i++) {
    stars.push({
      x: 50,
      y: 50,
      angle: Math.random() * Math.PI * 2,
      speed: Math.random() * 3 + 0.3,
      size: Math.random() * 1.5 + 0.75,
      drift: Math.random() / 3 + 0.1
    });
  }

  function drawStar(x, y, size) {
    ctx.rect(x * canvas.width / 100, y * canvas.height / 100, size, size);
  }

  function frame() {
    //  for(var spe = 0;spe<50;spe++)
    {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = 'white';
      ctx.beginPath();

      for (var i = 0; i < stars.length; i++) {
        var s = stars[i];
        s.x += s.speed * Math.cos(s.angle);
        s.y += s.speed * Math.sin(s.angle);
        s.speed *= 0.95;
        s.x += s.drift / 100;

        if (s.x > 110) {
          s.x = -10;
          s.y = Math.random() * 100;
          s.size = Math.random() * 2 + 1;
          s.drift = Math.random() / 3 + 0.1;
        }

        var dist = (s.x - mouseX) * (s.x - mouseX) + (s.y - mouseY) * (s.y - mouseY) / ratio / ratio;
        var tresh = 5;

        if (dist < tresh) {
          var angle = Math.atan2(s.y - mouseY, s.x - mouseX);
          var speed = Math.sqrt(tresh - dist) / 100;
          s.x += speed * Math.cos(angle);
          s.y += speed * Math.sin(angle) * ratio;
        }

        drawStar(s.x, s.y, s.size);
      }
    }
    ctx.fill();
    requestAnimationFrame(frame);
  }

  requestAnimationFrame(frame);
}

launch();
/******/ })()
;
