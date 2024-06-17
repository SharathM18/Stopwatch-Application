import "./style.css";

const display = document.querySelector(".display");
const startBtn = document.querySelector(".start");
const stopBtn = document.querySelector(".stop");
const resetBtn = document.querySelector(".reset");
const lapBtn = document.querySelector(".lap");
const displayLapLists = document.querySelector(".lap-lists");

let seconds = 0,
  minutes = 0,
  hours = 0;
let intervalId = null;
let laps = [];

const startStopwatch = () => {
  seconds++;

  if (seconds === 60) {
    seconds = 0;
    minutes++;

    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
  }

  let sec = seconds < 10 ? "0" + seconds : seconds;
  let min = minutes < 10 ? "0" + minutes : minutes;
  let hr = hours < 10 ? "0" + hours : hours;

  display.innerHTML = `${hr}:${min}:${sec}`;
};

const stopStopwatch = () => {
  clearInterval(intervalId);
  intervalId = null;
};

const resetStopwatch = () => {
  clearInterval(intervalId);
  intervalId = null;
  seconds = 0;
  minutes = 0;
  hours = 0;
  display.innerHTML = "00:00:00";
  laps = [];
  displayLapLists.innerHTML = "";
};

const addLap = () => {
  let lapTime = display.innerHTML;
  laps.push(lapTime);

  displayLapLists.innerHTML = "";

  laps.map((val, idx) => {
    displayLapLists.innerHTML += `<p>Lap ${idx + 1}: ${val}</p>`;
  });
};

startBtn.addEventListener("click", () => {
  if (!intervalId) {
    intervalId = setInterval(startStopwatch, 1000);
  }
});

stopBtn.addEventListener("click", () => {
  if (intervalId) {
    stopStopwatch();
  }
});

resetBtn.addEventListener("click", () => {
  resetStopwatch();
});

lapBtn.addEventListener("click", () => {
  if (intervalId) {
    addLap();
  }
});
