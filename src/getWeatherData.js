async function weatherData(input) {
  try {
    let weather = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${input}?key=2FEY9ENV9YYKUF5S933A2QLDY`,
      {
        mode: "cors",
      }
    );
    let weatherDataJSON = await weather.json();
    console.log(weatherDataJSON);
    return weatherDataJSON;
  } catch (err) {
    console.error(err);
    let newValue = "Tokyo";
    weatherData(newValue);
  }
}
export { weatherData };
