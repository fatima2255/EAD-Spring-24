document.getElementById('getWeatherBtn').addEventListener('click', function() {
    var city = document.getElementById('cityInput').value;
    if (city) {
      fetchWeather(city);
    } else {
      alert('Please enter a city name');
    }
  });
  
  function fetchWeather(city) {

    const apiKey = '20626fd4693fcc1ed390f39e2da89887';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        if (data.cod === 200) {
          displayWeather(data);
        } else {
          alert('City not found');
        }
      })
      .catch(error => {
        console.error('Error:', error);
        alert('Something went wrong');
      });
  }
  
  function displayWeather(data) {
    var weatherInfo = `
      <h2>${data.name}, ${data.sys.country}</h2>
      <p>Temperature: ${data.main.temp}°C</p>
      <p>Weather: ${data.weather[0].description}</p>
      <p>Wind Speed: ${data.wind.speed} m/s</p>
    `;
    document.getElementById('weatherInfo').innerHTML = weatherInfo;
  }
  