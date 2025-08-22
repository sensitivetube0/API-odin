import { weatherData } from "./getWeatherData.js";
import { processData } from "./processData.js";
import { displayWeatherData } from "./displayWeaherData.js";
let usersInput = (function () {
  let input = document.getElementById("data");
  let submit = document.querySelector(".sub");
  submit.addEventListener("click", () => {
    let inputValue = input.value;
    handleInput(inputValue);
  });
  async function handleInput(inputValue) {
    try {
      if (inputValue === "") {
        throw new Error();
      }
      console.log(inputValue);
      let data = await weatherData(inputValue);
      console.log(data);
      let processedData = await processData(data);
      console.log(processedData);
      let displayData = await displayWeatherData(processedData);
      return inputValue;
    } catch (err) {
      console.error(err);
      let newValue = "london";
      handleInput(newValue);
    }
  }
  return { handleInput };
})();
export { usersInput };
