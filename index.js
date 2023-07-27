let display = document.getElementById("timeZone");

let partDay = document.getElementById("partDay");

let fon = document.getElementById("container");

let data = new Date(Date.now());

let x = data.getTimezoneOffset();

let timeZone = x / -60;

let time = Date.now();

let timeDisplay = document.getElementById("time");
timeDisplay.textContent = timeStr();

function timeStr() {
  let data1 = new Date();

  return [data1.getHours(), data1.getMinutes()].join(":");
}

let hours = data.getHours();

display.textContent = "+" + timeZone;

if (hours >= 6 && hours <= 12) {
  partDay.textContent = "Good morning!";
  fon.style.background = "url(./images/morning.jpg) no-repeat";
} else if (hours > 12 && hours < 18) {
  partDay.textContent = "Good day!";
  fon.style.background = "url(./images/day.jpg) no-repeat";
} else if (hours >= 18 && hours < 24) {
  partDay.textContent = "Good evening!";
  fon.style.background = "url(./images/evening.jpg) no-repeat";
} else if (hours >= 0 && hours < 6) {
  partDay.textContent = "Good night!";
  fon.style.background = "url(./images/night.jpg) no-repeat";
}
