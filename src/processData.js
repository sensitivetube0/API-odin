async function processData(data) {
  let location = data.address;
  let description = data.description;
  let conditons = data.currentConditions.conditions;
  let tempratue = data.currentConditions.temp;
  let humidity = data.currentConditions.humidity;
  let windSpeed = data.currentConditions.windspeed;
  let beforeReturn = await Promise.all([
    location,
    description,
    conditons,
    tempratue,
    humidity,
    windSpeed,
  ]);
  return { location, description, tempratue, conditons, windSpeed, humidity };
}

export { processData };
