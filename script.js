const newYear = new Date('Jan 1 2023');

const dayElem = document.getElementById('day');
const hourElem = document.getElementById('hour');
const minElem = document.getElementById('min');
const secondElem = document.getElementById('second');

function countdown() {
  const currentDay = new Date();
  let seconds = (newYear - currentDay) / 1000; // convert milliseconds to seconds

  const dayCount = Math.floor(seconds / (24 * 3600));

  const hourCount = Math.floor(seconds / 3600) % 24;

  const minCount = Math.floor(seconds / 60) % 60;

  const secondCount = Math.floor(seconds) % 60;

  setTimeDOM(dayCount, hourCount, minCount, secondCount);
}

function setTimeDOM(days, hours, mins, seconds) {
  dayElem.innerHTML = formatTime(days);
  hourElem.innerHTML = formatTime(hours);
  minElem.innerHTML = formatTime(mins);
  secondElem.innerHTML = formatTime(seconds);
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

countdown();

window.setInterval(countdown, 1000);

// Note for later upgrade
// - User can create preset (name, target day) saved for later use
