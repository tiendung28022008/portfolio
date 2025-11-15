const mobileMenuButton = document.getElementById('mobile-menu');
const navList = document.getElementById('nav-list');
const overlay = document.getElementById('menu-overlay');

// Toggle mobile menu visibility
mobileMenuButton.addEventListener('click', () => {
    navList.classList.toggle('active');
    overlay.classList.toggle('active');
    // Toggle the hamburger to close icon
    mobileMenuButton.classList.toggle('open');
});

// Close the mobile menu when clicking on the overlay
overlay.addEventListener('click', () => {
    navList.classList.remove('active');
    overlay.classList.remove('active');
    mobileMenuButton.classList.remove('open');
});
