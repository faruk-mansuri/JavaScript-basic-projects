const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
const weekdays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4');

let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();

// let futureDate = new Date(2023, 2, 13, 00, 00, 00);
const futureDate = new Date(tempYear, tempMonth, tempDay + 10, 11, 30, 0);

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();

let month = futureDate.getMonth();
month = months[month];

let weekday = weekdays[futureDate.getDay()];

let date = futureDate.getDate();

giveaway.textContent = `giveaway ends on ${weekday}, ${date} ${month} ${year}, ${hours}:${minutes}am`;

// future time in milliSeconds
let futureTime = futureDate.getTime();

const getRemainingTIme = () => {
  const today = new Date().getTime();
  const time = futureDate - today;

  // 1s = 1000 ms
  // 1m = 60 s (60 * 1000 = 60,000 ms)
  // 1h = 60 m (60 * 60000 = 36,00,000 ms)
  // 1d = 24 h (24 * 3600000 = 8,64,00,000)

  // values in ms
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;

  // calculating the value
  let days = time / oneDay;
  days = Math.floor(days);
  let hours = Math.floor((time % oneDay) / oneHour);
  let minutes = Math.floor((time % oneHour) / oneMinute);
  let seconds = Math.floor((time % oneMinute) / 1000);

  // set values array
  const values = [days, hours, minutes, seconds];

  items.forEach((item, index) => {
    const format = (item) => {
      if (item < 10) {
        return (item = `0${item}`);
      }
      return item;
    };

    item.textContent = format(values[index]);
    if (time < 0) {
      clearInterval(countdown);
      deadline.innerHTML = `<h4 class='expired'>sorry, this give away has expired<h4>`;
    }
  });
};

// countdown
let countdown = setInterval(getRemainingTIme, 1000);

let nexYear = () => {
  let year = futureDate.getFullYear();
  futureDate.setFullYear(year + 1);
};
