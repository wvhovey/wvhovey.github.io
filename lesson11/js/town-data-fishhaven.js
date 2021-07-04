const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const towns = jsonObject['towns'];
    for (let i = 0; i < towns.length; i++ ) {
        
        if (i == 2) {
            let card = document.createElement('section');
            let h3 = document.createElement('h3');
            let p1 = document.createElement('p');
            let p2 = document.createElement('p');
            let p3 = document.createElement('p');
            let p4 = document.createElement('p');


            card.className = "town-event-list" + i;
            h3.textContent = "Yearly Events";
            
            p1.textContent = towns[i].events[0];
            p2.textContent = towns[i].events[1];
            p3.textContent = towns[i].events[2];
            p4.textContent = towns[i].events[3];


            card.appendChild(h3);
            card.appendChild(p1);
            card.appendChild(p2);
            card.appendChild(p3);
            card.appendChild(p4);
    
            document.querySelector('div.event-list').appendChild(card);

        }
    }



  });