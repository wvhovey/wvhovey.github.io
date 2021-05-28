const chill = document.getElementById('wind-chill');
const wind_speed = document.getElementById('wind-speed');
const temperature  = document.getElementById('temp');

const temp = parseFloat(temperature.value);
const speed = parseFloat(wind_speed.value);

if (temp <= 50 && speed >= 3) {
    chill.textContent = Math.round((35.74 + (0.6215 * temp) - (35.75 * (speed ** 0.16)) + 0.4275 * temp * (speed ** 0.16)) * 100) / 100
}
else {
    chill.textContent = 'N/A'
}

