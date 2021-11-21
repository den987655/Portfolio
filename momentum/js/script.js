const time = document.querySelector('.time');
const dateT = document.querySelector('.date');
const greeting = document.querySelector('.greeting');
const name = document.querySelector('.name');

function showTime() {
  const date = new Date();
  const currentTime = date.toLocaleTimeString();
  time.textContent = currentTime;
  setTimeout(showTime, 1000);
  showDate()
  showGreeting()
};
showTime();

function showDate() {
  const date = new Date();
  const options = {weekday: "long", day: 'numeric', month: 'long' };
  const currentDate = date.toLocaleDateString('ru-RU', options);
  dateT.textContent = currentDate;
  
};
showDate()

function showGreeting() {
  const timeOfDay = getTimeOfDay();
  const greetingText = `${timeOfDay}`;
  greeting.textContent = greetingText;
};
showGreeting()

// вывод на экран текста приветствия
function getTimeOfDay() {
  const date = new Date();
  const hours = date.getHours();
  console.log(hours);

// определим фразу приветствия в зависимости от местного времени пользователя 
if (hours <= 6) {
  return 'Доброй ночи';
} else if (hours <= 12) {
  return 'Доброе утро';
} else if (hours <= 18) {
  return 'Добрый день';
} else {
  return 'Добрый вечер';
  }
};
getTimeOfDay()

// При перезагрузке страницы приложения имя пользователя сохраняется

function setLocalStorage() {
  localStorage.setItem('name', name.value);
}
window.addEventListener('beforeunload', setLocalStorage)

function getLocalStorage() {
  if(localStorage.getItem('name')) {
    name.value = localStorage.getItem('name');
  }
}
window.addEventListener('load', getLocalStorage)


async function getLinkToImage() {
 const url = 'https://api.unsplash.com/photos/random?query=morning&client_id=NttgdNm5cwxw6trk5MF-qpyp3bfgv8RZiu2d6fg1LtQ';
 const res = await fetch(url);
 const data = await res.json();
 console.log(data.urls.regular);
};