document.addEventListener('DOMContentLoaded', function () {
    const menuButton = document.querySelector('.menu-button');
    const signinButton = document.querySelector('.signin');
    const signupButton = document.querySelector('.signup');

    // Menu button click event
    menuButton.addEventListener('click', function () {
        // Add your menu toggle logic here
        alert('Menu button clicked!');
    });

    // Sign In button click event
    signinButton.addEventListener('click', function () {
        // Add your sign-in logic here
        alert('Sign In clicked!');
    });

    // Sign Up button click event
    signupButton.addEventListener('click', function () {
        // Add your sign-up logic here
        alert('Sign Up clicked!');
    });
});

// Get all banner images
const bannerImages = document.querySelectorAll('.banner-image');
const bannerStepper = document.querySelector('.banner-stepper');

let currentImageIndex = 0;

// Function to toggle active class on images
function toggleImages() {
    bannerImages[currentImageIndex].classList.remove('active');
    currentImageIndex = (currentImageIndex + 1) % bannerImages.length;
    bannerImages[currentImageIndex].classList.add('active');
}

// Set interval for image change
setInterval(() => {
    toggleImages();
}, 1000);

// Add animation class to the banner stepper
bannerStepper.classList.add('animate');
