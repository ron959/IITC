document.addEventListener('DOMContentLoaded', function() {
    // Select all buttons inside #numbers-container and all buttons on the page
    const numButtons = document.querySelectorAll('#numbers-container button');
    const allBtns = document.querySelectorAll('button');
    const numSelected = document.getElementById('selected-number');    

    // Variable to keep track of the previously selected button
    let previousButton = null;

    // Add hover (mouseenter and mouseleave) event listeners for all buttons
    allBtns.forEach(button => {
        button.addEventListener('mouseenter', function() {
            if (button !== previousButton) { // Only change color if it's not the selected button
                button.style.backgroundColor = 'hsl(25, 97%, 53%)';
            }
        });

        button.addEventListener('mouseleave', function() {
            if (button !== previousButton) { // Only reset color if it's not the selected button
                button.style.backgroundColor = '';
            }
        });
    });

    // Add click event listeners to numButtons
    numButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            // Reset the background color of the previously selected button
            if (previousButton) {
                previousButton.style.backgroundColor = ''; // Reset previous button color
            }

            // Set the background color of the currently clicked button
            const selectedButton = event.target;
            selectedButton.style.backgroundColor = 'white';

            // Update the previousButton to the current one
            previousButton = selectedButton;
            const selectedNumber = button.textContent;
            numSelected.textContent = `${selectedNumber}`;
        });
    });

    // Submit button logic
    const submitBtn = document.querySelector('#submit-btn');
    const thankContainer = document.getElementById('thank-container');
    const ratingContainer = document.getElementById('rating-container');

    // Add event listener to the submit button
    submitBtn.addEventListener('click', () => {
        if (previousButton === null) {
            alert('You have to click a number to submit');
        } else {
            // Show the thank-you container and hide the rating container
            thankContainer.classList.remove('hidden');
            ratingContainer.classList.add('hidden');
        }
    });
});

