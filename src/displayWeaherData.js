async function displayWeatherData(data) {
  //get data

  //query select location for data

  let weather = document.querySelector(".wea");
  let description = document.querySelector(".des");
  let conditon = document.querySelector(".con");
  let tempratue = document.querySelector(".tem");
  let humidity = document.querySelector(".hum");
  let windspeed = document.querySelector(".win");
  //display data
  weather.textContent = data.location;
  description.textContent = data.description;
  conditon.textContent = data.conditons;
  tempratue.textContent = data.tempratue;
  humidity.textContent = data.humidity;
  windspeed.textContent = data.windSpeed;
}
export { displayWeatherData };
