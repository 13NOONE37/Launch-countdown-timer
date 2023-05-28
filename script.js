let eventDate = new Date();
eventDate.setDate(eventDate.getDate() + 8);
eventDate.setHours(eventDate.getHours() + 23);
eventDate.setMinutes(eventDate.getMinutes() + 55);
eventDate.setSeconds(eventDate.getSeconds() + 42 + 1);

const daysElement = document.getElementById('days');
const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');

const formatValue = (value) => (value < 10 ? `0${value}` : value);
const setCardValues = (parent, currentTime, nextTime) => {
  parent.querySelector('.top').innerText = formatValue(currentTime);
  parent.querySelector('.bottom').innerText = formatValue(nextTime);
  parent.querySelector('.top-back').innerText = formatValue(nextTime);
  parent.querySelector('.bottom-back').innerText = formatValue(currentTime);
};
const startAnimation = (parent, time) => {
  if (parent.querySelector('.top').innerText == time) return false;

  parent.querySelector('.top').classList.toggle('top-flip');
  parent.querySelector('.bottom').classList.toggle('bottom-flip');
  return true;
};
const endAnimation = (parent) => {
  parent.querySelector('.top').classList.toggle('top-flip');
  parent.querySelector('.bottom').classList.toggle('bottom-flip');
};
const flipSecondsOrMinutes = (parent, time) => {
  if (!startAnimation(parent, time)) return;

  setTimeout(() => {
    setCardValues(parent, time, time - 1 === -1 ? 59 : time - 1);
    endAnimation(parent);
  }, 750);
};
const flipHours = (parent, time) => {
  if (!startAnimation(parent, time)) return;

  setTimeout(() => {
    setCardValues(parent, time, time - 1 === -1 ? 23 : time - 1);
    endAnimation(parent);
  }, 750);
};
const flipDays = (parent, time) => {
  if (!startAnimation(parent, time)) return;

  setTimeout(() => {
    setCardValues(parent, time, time - 1);
    endAnimation(parent);
  }, 750);
};

const updateCountdown = () => {
  const timeDiff = Math.floor((eventDate - Date.now()) / 1000);
  const days = Math.floor(timeDiff / (3600 * 24));
  const hours = Math.floor((timeDiff / 3600) % 24);
  const minutes = Math.floor((timeDiff / 60) % 60);
  const seconds = Math.floor(timeDiff % 60);

  flipSecondsOrMinutes(secondsElement, seconds);
  flipSecondsOrMinutes(minutesElement, minutes);
  flipHours(hoursElement, hours);
  flipDays(daysElement, days);
};

//INIT
const init = () => {
  const timeDiff = Math.floor((eventDate - Date.now()) / 1000 - 1);
  const days = Math.floor(timeDiff / (3600 * 24));
  const hours = Math.floor((timeDiff / 3600) % 24);
  const minutes = Math.floor((timeDiff / 60) % 60);
  const seconds = Math.floor(timeDiff % 60);

  setCardValues(secondsElement, seconds, seconds - 1 === -1 ? 59 : seconds - 1);
  setCardValues(minutesElement, minutes, minutes - 1 === -1 ? 59 : minutes - 1);
  setCardValues(hoursElement, hours, hours - 1 === -1 ? 23 : hours - 1);
  setCardValues(daysElement, days, days - 1);
};
init();

setInterval(() => {
  updateCountdown();
}, 1000);
