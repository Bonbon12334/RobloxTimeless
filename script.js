// Initialize EmailJS with Public API Key
(function() {
    emailjs.init("WN8o8sdE0WQ0KRnCW"); // Replace with your actual Public API Key from EmailJS
})();

// Event listener for form submission
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Prepare the email parameters
    const emailParams = {
        from_name: name,
        from_email: email,
        message: message
    };

    // Send email using EmailJS
    emailjs.send("service_ooejkom", "template_idqnev7", emailParams) // Replace with your actual Service ID and Template ID
        .then(function(response) {
            console.log("Email sent successfully!", response);
            alert("Thank you for reaching out! We will get back to you soon.");
            // Clear the form after submission
            document.getElementById("contactForm").reset();
        }, function(error) {
            console.error("Error sending email: ", error);
            alert("Oops! Something went wrong. Please try again later.");
        });
});
