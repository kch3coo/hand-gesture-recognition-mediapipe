const el = document.querySelector(".mouse");

function onMouseMove(e) {
  x = e.clientX;
  y = e.clientY;
  updateMouse(x, y);
}

function updateMouse(x, y) {
  el.style.transform = `translate(${x}px, ${y}px)`;
}

function mouseClick(x, y) {
  var ev = new MouseEvent("click", {
    view: window,
    bubbles: true,
    cancelable: true,
    screenX: x,
    screenY: y,
  });

  var el = document.elementFromPoint(x, y);

  el.dispatchEvent(ev);
  console.log("clicked at " + x + "," + y);
}

window.addEventListener("mousemove", onMouseMove);

function changeBG() {
  var x = Math.floor(Math.random() * 256);
  var y = Math.floor(Math.random() * 256);
  var z = Math.floor(Math.random() * 256);
  var bgColor = "rgb(" + x + "," + y + "," + z + ")";
  console.log(bgColor);

  document.body.style.background = bgColor;
}


// https://www.jb51.net/article/220422.htm
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function sendDanMu(msg) {
  //将文本框内容用div包裹起来，便于后续处理
  var $content = $('<div class="text">' + msg + '</div>');
  //获取弹幕墙对象
  $screen = $(document.getElementById("screen"));
  //设置弹幕体出现时的上边距，为任意值
  var top = Math.random() * $screen.height() + 40;
  var randomColor = Math.floor(Math.random()*16777215).toString(16);
  //设置弹幕体的上边距和左边距
  $content.css({
      top: top + "px",
      left: 80,
      'font-size': getRandomInt(3) + "rem",
      color: "#" + randomColor
  });
  //将弹幕体添加到弹幕墙中
  $('.dm_show').append($content);
  //弹幕体从左端移动到最右侧，时间为8秒，然后直接删除该元素
  $content.animate({
      left: $screen.width() + 80 - $content.width()
  }, 5000, function () {
      $(this).remove();
  });
}