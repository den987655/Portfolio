const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');
const city = document.querySelector('.city');



async function getWeather() {  
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=ru&appid=fd0f24d4f273fa6d3f2c2acea0947400&units=metric`;
  const res = await fetch(url);
  const data = await res.json(); 
  

  weatherIcon.className = 'weather-icon owf';
  weatherIcon.classList.add(`owf-${data.weather[0].id}`);
  temperature.textContent = `${data.main.temp.toFixed(0)}°C`;
  weatherDescription.textContent = data.weather[0].description;
}


function change(event) {
  if (event.code === 'Enter') {
    getWeather();
  }
}

city.addEventListener("keypress", change);
city.addEventListener("focus", change);