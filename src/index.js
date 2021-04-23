import "./styles.css";

const clock_h3 = document.querySelector("h3");

function calculateTime(time) {
  if (time < 0) {
    clock_h3.innerText = "D-day";
  } else {
    let lastTime = time;
    const second = 1000;
    const minute = 60 * second;
    const hour = 60 * minute;
    const day = 24 * hour;
    let leftDay = Math.floor(lastTime / day);
    lastTime -= leftDay * day;
    let leftHour = Math.floor(lastTime / hour);
    lastTime -= leftHour * hour;
    let leftMinute = Math.floor(lastTime / minute);
    lastTime -= leftMinute * minute;
    let leftSecond = Math.floor(lastTime / second);
    clock_h3.innerText = `${leftDay}d ${
      leftHour < 10 ? `0${leftHour}` : leftHour
    }h ${leftMinute < 10 ? `0${leftMinute}` : leftMinute}m ${
      leftSecond < 10 ? `0${leftSecond}` : leftSecond
    }s`;
  }
}

// You're gonna need this
function getTime() {
  // Don't delete this.
  const xmasDay = new Date("2021-12-24:00:00:00+0900");
  const nowDay = new Date();
  calculateTime(xmasDay - nowDay);
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}
init();
