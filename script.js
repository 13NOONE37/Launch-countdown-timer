let eventDate = new Date();
eventDate.setDate(eventDate.getDate() + 8);
eventDate.setHours(eventDate.getHours() + 23);
eventDate.setMinutes(eventDate.getMinutes() + 55);
eventDate.setSeconds(eventDate.getSeconds() + 41);

const daysElement = document.getElementById('days');
const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');

const formatValue = (value) => (value < 10 ? `0${value}` : value);

const updateCountdown = () => {
  const timeDiff = Math.floor((eventDate - Date.now()) / 1000);
  const days = Math.floor(timeDiff / (3600 * 24));
  const hours = Math.floor((timeDiff / 3600) % 24);
  const minutes = Math.floor((timeDiff / 60) % 60);
  const seconds = Math.floor(timeDiff % 60);

  daysElement.innerText = formatValue(days);
  hoursElement.innerText = formatValue(hours);
  minutesElement.innerText = formatValue(minutes);
  secondsElement.innerText = formatValue(seconds);
};
updateCountdown();
setInterval(() => {
  updateCountdown();
}, 1000);
