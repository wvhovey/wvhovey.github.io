document.querySelector('#current-date').textContent = document.lastModified;

var options = {year: 'numeric'};
document.querySelector('#current-year').textContent = new Date().toLocaleDateString('en-US', options);