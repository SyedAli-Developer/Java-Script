const second = document.querySelector(".second");
const minute = document.querySelector(".minute");
const hour = document.querySelector(".hour");

let s = 0;
let m = 0;
let h = 0;

let time;
function start() {
  clearInterval(time);
  console.log("Timer Started");
  console.log(`Time was: ${h} : ${m} : ${s}`);

  time = setInterval(function () {
    if (s < 10) {
      second.textContent = "0" + s++;
    } else {
      second.textContent = s++;
      h++;
    }
    if (s === 61) {
      s = 0;

      minute.textContent = m++;
      if (m < 10) {
        minute.textContent = "0" + m;
      } else {
        minute.textContent = m;
      }
      if (m === 61) {
        m = 0;
        hour.textContent = h++;
        if (h < 10) {
          hour.textContent = "0" + h;
        } else {
          hour.textContent = h;
        }
        if (h > 24) {
          // stop()
        }
      }
    }
  }, 1);
}
function stop() {
  clearInterval(time);
  console.log("Timer Stop");
  console.log(`Time was: ${h} : ${m} : ${s}`);
}
function reset() {
  clearInterval(time);
  h = 0;
  m = 0;
  s = 0;
  hour.textContent = "00";
  minute.textContent = "00";
  second.textContent = "00";
  console.log("Timer Reset");
}
