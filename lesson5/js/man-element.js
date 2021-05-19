// Create variables to hold references to the 'input', 'button', and 'list' elements
const input  = document.querySelector('input');
const button = document.querySelector('button');
const list   = document.querySelector('ul');

// Functionality for the 'Add Chapter' button
button.addEventListener('click', function(){

    // Assign the value of the user's input to a variable for ease of use
    const userInput = input.value;

    // Make sure the user's input is not blank
    if (userInput.length >= 1) {

        // Create variables to hold the li element and the delete button
        const liElement     = document.createElement('li');
        const deleteButton  = document.createElement('button');
        
        // Populate the li element with the text from the user's input
        liElement.append(userInput);

        // Populate the button's textContent with the appropriate symbol
        deleteButton.textContent = '❌';

        // Append the li element with the delete button
        liElement.append(deleteButton);

        // Append the list element (ul) with the li element (which contains the user's input and the delete button)
        list.append(liElement);
        
        // Functionality for the delete button
        deleteButton.addEventListener('click', function() {

            // Removes the li element from the list
            list.removeChild(liElement);
        })
        
        // Send the focus to the input element
        input.focus();
    }

    // Make it so the user's input is not sticky
    input.value = '';

    // Set the focus to the input
    input.focus();

})
