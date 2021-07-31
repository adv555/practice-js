const deadline = '2020-05-11';

function getTimeRemaining(endtime) {
  const t = Date.parse(endtime) - Date.parse(new Date()),
    days = Math.floor(t / (1000 * 60 * 60 * 24)),
    seconds = Math.floor((t / 1000) % 60),
    minutes = Math.floor((t / 1000 / 60) % 60),
    hours = Math.floor((t / (1000 * 60 * 60)) % 24);

  return {
    total: t,
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds,
  };
}

function getZero(num) {
  if (num >= 0 && num < 10) {
    return '0' + num;
  } else {
    return num;
  }
}

function setClock(selector, endtime) {
  const refs = {
    timer: document.querySelector(selector),
    days: document.querySelector('#days'),
    hours: document.querySelector('#hours'),
    minutes: document.querySelector('#minutes'),
    seconds: document.querySelector('#seconds'),
    timeInterval: setInterval(updateClock, 1000),
  };

  updateClock();

  function updateClock() {
    const t = getTimeRemaining(endtime);

    refs.days.innerHTML = getZero(t.days);
    refs.hours.innerHTML = getZero(t.hours);
    refs.minutes.innerHTML = getZero(t.minutes);
    refs.seconds.innerHTML = getZero(t.seconds);

    if (t.total <= 0) {
      clearInterval(refs.timeInterval);
    }
  }
}

setClock('.timer', deadline);
