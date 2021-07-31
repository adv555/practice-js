// ==================== 1

// let date = new Date();

// // формат вывода
// const options = {
//   weekday: 'long',
//   year: 'numeric',
//   month: 'short',
//   day: 'numeric',
//   hour: '2-digit',
//   minute: '2-digit',
// };

// // Украина
// const localeUk = date.toLocaleString('Uk-uk', options);
// console.log(localeUk); // понеділок, 19 бер. 2018 р., 17:42

// // USA
// const localeUs = date.toLocaleString('en-US', options);
// console.log(localeUs); // Monday, Mar 19, 2018, 5:43 PM

// console.log(options);

// ==================== 2

var data = new Date();
document.write(data.getDate());
document.write(': ', data.getFullYear());
document.write(': ', data.toDateString());
console.log(data.toDateString());
console.log(typeof data.toLocaleString());
// data.getDay(); // номер дня (0-6)
// data.getFullYear(); // 1000-9999
// data.getHours(); // текущее значение часов
// data.getMiliseconds(); // миллисекунды
// data.getMinutes(); // минуты
// data.getMonth(); // месяцы (0-11)
// data.getSeconds(); // секунды

// преобразования в строку:
// data.toDateString();
// data.toLocaleDateString();
// data.toLocaleString();
// date.toString();

// ==================== 3

// var my_date = new Date();
// alert(my_date.getDate());

// // 'my_date' - это экземпляр объекта Date?
// alert(my_date instanceof Date);

// ==================== 4
// var today = new Date();
// var birth = new Date('March 27, 1986 05:24:00');
// alert(birth);

// // или
// var birth = new Date(1986, 03, 27);
// var birth = new Date(1986, 03, 27, 5, 24, 0);

// ==================== 5
var dt = new Date();
dt.setFullYear(2012, 02, 12);
console.log(dt);

var tm = new Date();
var resTxt = '';
resTxt += 'Сейчас ' + tm.getHours() + ':' + tm.getMinutes() + ':' + tm.getSeconds() + ', ';

resTxt += 'дата: ' + tm.getDate() + '.' + (tm.getMonth() + 1) + '.' + tm.getFullYear();

alert(resTxt);

//================= 6

var countdown = 5;
var timer = setInterval(function () {
  countdown--;
  if (!countdown) {
    clearInterval(timer);
  }

  console.log('Обратный отсчет: ' + countdown);
}, 1000); // Частота: 2000 [ms] = 2 [s]

// ================== 2

const date = new Date('July 22, 2018 07:22:13');
console.log(new Intl.DateTimeFormat().format(date)); //"22/07/2018" in my locale
console.log(new Intl.DateTimeFormat('en-US').format(date)); //"7/22/2018"

const options = {
  year: 'numeric',
  month: 'numeric',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric',
};

console.log(new Intl.DateTimeFormat('en-US', options).format(date)); //"7/22/2018, 7:22:13 AM"
// new Intl.DateTimeFormat('it-IT', options2).format(date); //"22/7/2018, 07:22:13"
