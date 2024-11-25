document.addEventListener('DOMContentLoaded', function () {
    // Burger Menu Toggle
    const burgerMenu = document.querySelector('.burger-menu');
    const mobileNav = document.querySelector('.mobile-nav');

    burgerMenu.addEventListener('click', () => {
        mobileNav.classList.toggle('active');
    });

    // Scroll Animations
    const animatedElements = document.querySelectorAll('.animated-content, .animated-title, .animated-header, .animated-nav');

    function animateOnScroll() {
        animatedElements.forEach((element) => {
            const elementPosition = element.getBoundingClientRect().top;
            const viewPortHeight = window.innerHeight - 100;

            if (elementPosition < viewPortHeight) {
                element.classList.add('in-view');
            }
        });
    }

    window.addEventListener('scroll', animateOnScroll);

    animateOnScroll(); // Initial call for elements in view at load
});
