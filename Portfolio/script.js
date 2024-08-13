// Adding an event listener to the contact form for handling form submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
    // Preventing the default form submission behavior
    e.preventDefault();

    // Retrieving the values entered in the form fields
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simple form validation to ensure all fields are filled out
    if (name && email && message) {
        // Displaying a confirmation message if all fields are filled
        alert('Thank you for your message!');

        // Resetting the form fields after submission
        document.getElementById('contactForm').reset();
    } else {
        // Displaying an error message if any fields are empty
        alert('Please fill out all fields.');
    }
});
