const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=90899f2531f315e25562f0f4572b08c9";

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

    document.getElementById('temp').textContent = jsObject.main.temp;
    document.getElementById('wind-speed').textContent = jsObject.wind.speed;
    document.getElementById('humidity').textContent = jsObject.main.humidity;
    document.getElementById('currently').textContent = jsObject.weather[0].main;

    const chill = document.getElementById('wind-chill');
    const temp = jsObject.main.temp;
    const speed = jsObject.wind.speed;

    if (temp <= 50 && speed >= 3) {
        chill.textContent = Math.round((35.74 + (0.6215 * temp) - (35.75 * (speed ** 0.16)) + 0.4275 * temp * (speed ** 0.16)) * 100) / 100 + ' °F'
    }
    else {
        chill.textContent = 'N/A';
    }

  });

  const apiURL_forecast = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=90899f2531f315e25562f0f4572b08c9";
  fetch(apiURL_forecast)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);



    let forecast = [];
    let j = 0;;
    for(let i = 0; i < jsObject.list.length; i++) {
        if(jsObject.list[i].dt_txt.includes("18:00:00")) {
            forecast[j] = jsObject.list[i];
            j++;
        }

    }

    const table = document.getElementById("forecast-table");
    const tr = document.createElement("tr");
    let lastChild = document.getElementById("forecast-temps");
    
    for(let i = 0; i < forecast.length; i++) {

        let td = document.createElement('td');
        let img = document.createElement('img');

        img.setAttribute('src', 'https://openweathermap.org/img/w/' + forecast[i].weather[0].icon + '.png');
        img.setAttribute('alt', forecast[i].weather[0].description);

        td.appendChild(img);

        tr.appendChild(td);

        table.insertBefore(tr, lastChild);


        document.getElementById(`forecast-temp${i + 1}`).textContent = forecast[i].main.temp;
    }
    
  });

  let currentDay = (new Date()).getDay();
  const day = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

  for(let i = 0; i < 5 ; i++) {
      if(currentDay > 6) {
          currentDay -= 7;
      }
      else {
          currentDay = currentDay;
      }

      document.getElementById(`weekday${i + 1}`).textContent = day[currentDay];
      
      currentDay += 1;
  }