const apiURL = "https://api.openweathermap.org/data/2.5/onecall?lat=42.3601&lon=-72.0589&units=imperial&appid=90899f2531f315e25562f0f4572b08c9";

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    if(jsObject.alerts) {
        document.querySelector('#weather-alert-desc').textContent = jsObject.alerts[0].description;
        document.querySelector('#weather-alert').textContent = jsObject.alerts[0].event;
    } else {
        document.querySelector('#alertBox').style.display="none"
    }

    document.querySelector('#current-temp').textContent = Math.round(jsObject.current.temp);
    document.querySelector('#current-desc').textContent = jsObject.current.weather[0].main;
    document.querySelector('#current-humid').textContent = jsObject.current.humidity;

    let currentDay = (new Date()).getDay();
    const day = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

    for(let i = 0; i < 3 ; i++) {
      if(currentDay > 6) {
          currentDay -= 7;
      }
      else {
          currentDay = currentDay;
      }

      document.getElementById(`weekday${i + 1}`).textContent = day[currentDay];
      
      currentDay += 1;
    }

    document.querySelector('#today-forecast').textContent = Math.round(jsObject.daily[0].temp.day) + "°F";
    document.querySelector('#tomorrow-forecast').textContent = Math.round(jsObject.daily[1].temp.day) + "°F";
    document.querySelector('#third-forecast').textContent = Math.round(jsObject.daily[2].temp.day) + "°F";


  });


function hide(id) {
    id.style.display="none"
}