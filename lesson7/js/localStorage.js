// Calculate difference in days between two dates
function getDifferenceOfDays(start, end) {

    // Inizialize date variables
    const date1 = new Date(start); 
    const date2 = new Date(end);

    // One day = 86,400,000 milliseconds (required because Date() returns milliseconds)
    const oneDay = 86400000;

    // Calculate the time difference between two dates in milliseconds
    const diffInTime = date2.getTime() - date1.getTime();

    // Calculate # of days in between the two dates
    const diffInDays = Math.round(diffInTime / oneDay);

    // return # of days
    return diffInDays;
}

// If the user has never visited the site, go to storeData() to set up local storage
if(!localStorage.getItem('date')) {
    storeDate();
// Otherwise got to setData() to compile the information 
  } else {
    setDate();
  }


function storeDate() {

    // Locally store 'date' to a new Date.
    localStorage.setItem('date', new Date());

    // go to setData to compile the information
    setDate();
}

function setDate() {

    
    // Get the Date() saved locally to 'date'. This will be the last time the user browsed the site.
    var last_visited = localStorage.getItem('date'); 
    // Get the current date the user is using the site
    var current_date = new Date()

    // Test Lines
    // document.getElementById('test2').textContent = last_visited
    // document.getElementById('test1').textContent = current_date

    // Use getDifferenceOfDays to calculate the difference between these two dates and write it to the 'last-date' element
    document.getElementById('last-date').textContent = getDifferenceOfDays(last_visited, current_date)
  
    // Reset the local storage to the current time for future use as last_visited
    localStorage.setItem('date', new Date());
}



