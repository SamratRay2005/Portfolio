/*!
* Start Bootstrap - Resume v7.0.6 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // ----------------------------------------------
    // Tab functionality for the Skills section
    // ----------------------------------------------
    document.querySelectorAll('#skills .tab-button').forEach(button => {
        button.addEventListener('click', () => {
            const tab = button.getAttribute('data-tab');

            // Remove active class from all buttons and tab contents
            document.querySelectorAll('#skills .tab-button').forEach(btn => btn.classList.remove('active'));
            document.querySelectorAll('#skills .tab-content').forEach(content => content.classList.remove('active'));

            // Activate current button and corresponding tab content
            button.classList.add('active');
            document.getElementById(tab).classList.add('active');
        });
    });

    // ---------------------------------------------------
    // Intersection Observer for project animations & awards
    // ---------------------------------------------------
    const observerOptions = {
        threshold: 0.2 // Adjust threshold as needed
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe project cards
    document.querySelectorAll('.project-card').forEach(card => {
        observer.observe(card);
    });

    // Observe award categories (Achievements)
    document.querySelectorAll('.award-category').forEach(category => {
        observer.observe(category);
    });

});
