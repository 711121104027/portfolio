document.addEventListener('DOMContentLoaded', function () {
    // Select all elements with the class 'text-wrapper-2'
    const buttons = document.querySelectorAll('.text-wrapper-2');

    // Iterate over each button
    buttons.forEach(button => {
        // Add a click event listener to each button
        button.addEventListener('click', function (event) {
            event.preventDefault(); // Prevent the default link behavior

            // Remove the 'active' class from all buttons
            buttons.forEach(btn => btn.classList.remove('active'));

            // Add the 'active' class to the clicked button
            this.classList.add('active');

            // Add the 'active-animate' class for the color animation
            this.classList.add('active-animate');

            // Find the closest parent <a> tag and get its href
            const parentLink = this.closest('a').getAttribute('href');

            // Remove the 'active-animate' class after the animation is done (0.5s)
            setTimeout(() => {
                this.classList.remove('active-animate');
                
                // Redirect to the link after the animation
                window.location.href = parentLink;
            }, 500); // Match this duration with your CSS animation length
        });
    });
});



