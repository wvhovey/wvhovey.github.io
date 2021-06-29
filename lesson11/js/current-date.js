var options = {weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'};
document.getElementById('current-date').textContent = new Date().toLocaleDateString('en-GB', options);