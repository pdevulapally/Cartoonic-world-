// JavaScript to handle animations and interactivity

document.addEventListener('DOMContentLoaded', function () {
    // Handle Loading Screen
    const loadingScreen = document.querySelector('.loading-screen');

    setTimeout(() => {
        loadingScreen.style.display = 'none';
    }, 2000); // Simulates loading time with a 2-second delay

    // Handle Burger Menu for Mobile Navigation
    const burgerMenu = document.querySelector('.burger-menu');
    const mobileNav = document.querySelector('.mobile-nav');

    burgerMenu.addEventListener('click', () => {
        mobileNav.classList.toggle('active');
        // Toggle active class to show/hide the mobile navigation
    });

    // Handle Explore Button on Home Section
    const exploreBtn = document.querySelector('.explore-btn');
    exploreBtn.addEventListener('click', () => {
        window.location.href = '#cartoons';
        // Scroll to the cartoons section when the button is clicked
    });

    // Optional: Handle Scroll Animations for Different Sections
    const sections = document.querySelectorAll('section');
    
    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;

        sections.forEach(section => {
            if (scrollPosition >= section.offsetTop - window.innerHeight / 1.5) {
                section.classList.add('in-view');
                // Add 'in-view' class to trigger CSS animations when the section comes into view
            }
        });
    });

    // Optional: Smooth Scroll for All Anchor Links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        });
    });

    // Additional interactive elements or animations can be added here
    // Example: Toggle Class for Other Buttons, Trigger Animations, etc.
});

