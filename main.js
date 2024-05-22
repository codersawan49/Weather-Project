let apiKey = '6fa6fef80735c7f5cdac9d6c802d65e7';
let temperature = document.getElementById('temperature');
let wind = document.getElementById('wind');
let pressure = document.getElementById('pressure');
let overAll = document.getElementById('overall');
let humidity = document.getElementById('humidity');


let getWeatherData = async () => {

  let cityName = document.getElementById('city');
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName.value}&appid=${apiKey}&units=metric`
  let fetching = await fetch(url);
  let getData = await fetching.json();
  overAll.innerText = getData.weather[0].main;
  wind.innerText = getData.wind.speed + "m/s";
  pressure.innerText = getData.main.pressure + " hPa";
  temperature.innerText = getData.main.temp + "°C";
  humidity.innerText = getData.main.humidity + "%";
}