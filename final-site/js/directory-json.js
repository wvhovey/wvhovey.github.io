const getJson = 'json/directory.json';

fetch(getJson)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject); 
    const businesses = jsonObject['businesses'];
    for (let i = 0; i < businesses.length; i++ ) {
        
        let card = document.createElement('section');
        let div = document.createElement('div');
        let h2 = document.createElement('h2');
        let p1 = document.createElement('p');
        let a = document.createElement('a');
        let img = document.createElement('img');

        card.className = "business-cards";
        div.className = "business-img-div";
        h2.textContent = businesses[i].name;
        p1.textContent = businesses[i].contact;
        a.href = businesses[i].link;
        a.textContent = businesses[i].name + " Website";
        a.target = "_blank"
        img.setAttribute('src', businesses[i].logo)
        img.setAttribute('alt', businesses[i].name + ' Logo');
        img.setAttribute('loading', 'lazy');

        div.append(img)

        card.appendChild(h2);
        card.appendChild(p1);
        card.appendChild(a);
        card.appendChild(div);

        document.querySelector('div.cards').appendChild(card);
    }

    
  });