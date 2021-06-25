const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const towns = jsonObject['towns'];
    for (let i = 0; i < towns.length; i++ ) {
        
        if (i == 0 || i == 2 || i == 6) {
            let card = document.createElement('section');
            let h3 = document.createElement('h3');
            let h4 = document.createElement('h4');
            let p1 = document.createElement('p');
            let p2 = document.createElement('p');
            let p3 = document.createElement('p');
            let img = document.createElement('img');

    
            card.className = "town-card" + i;
            h3.textContent = towns[i].name;
            h4.textContent = towns[i].motto;
            p1.textContent = "Year Founded: " + towns[i].yearFounded;
            p2.textContent = "Population: " + towns[i].currentPopulation;
            p3.textContent = "Annual Rainfall: " + towns[i].averageRainfall;
            img.setAttribute('src', "images/" + towns[i].photo)
            img.setAttribute('alt', towns[i].name + i);
    
            card.appendChild(h3);
            card.appendChild(h4);
            card.appendChild(p1);
            card.appendChild(p2);
            card.appendChild(p3);
            card.appendChild(img);
    
            document.querySelector('div.town-cards').appendChild(card);

        }
    }



  });