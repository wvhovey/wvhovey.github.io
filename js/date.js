var options = {weekday: 'long', day: 'numeric', month: 'long', year: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric'};
document.getElementById('current-date').textContent = new Date().toLocaleDateString('en-US', options);

var options = {year: 'numeric'};
document.querySelector('#current-year').textContent = new Date().toLocaleDateString('en-US', options);