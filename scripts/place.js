const year = new Date().getFullYear();
document.querySelector("#currentyear").textContent = year;


const lastModified = document.lastModified;
document.querySelector("#lastModified").textContent = `Last Update: ${lastModified}`;

const pageTemperature = document.querySelector("#temperature");
const pageConditions = document.querySelector("#conditions");
const pageWindSpeed = document.querySelector("#wind-speed");
const pageWindChill = document.querySelector("#wind-chill");

let temperature = 20;
let conditions = "sun";
let windSpeed = 10;

function calculateWindChill(temperature, windSpeed) {
    return (13.12 + (0.6215 * temperature) - (11.37 * (windSpeed ** 0.16)) + ((0.3965 * temperature) * (windSpeed ** 0.16))).toFixed(1);
}


pageTemperature.textContent = `${temperature}°C`;
pageConditions.textContent = `${conditions}`;
pageWindSpeed.textContent = `${windSpeed} km/h`;

if (temperature <= 10 && windSpeed > 4.8) {
    pageWindChill.textContent = `${calculateWindChill(temperature, windSpeed)}°C`;
} else {
    pageWindChill.textContent = `N/A`;
};