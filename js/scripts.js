/*!
* Start Bootstrap - New Age v6.0.1 (https://startbootstrap.com/theme/new-age)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-new-age/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
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

    // Navbar scroll: transparent on hero pages, always solid on sub-pages
    var nav = document.getElementById('mainNav');
    if (nav) {
        var hasMasthead = document.querySelector('.masthead');
        if (!hasMasthead) {
            nav.classList.add('scrolled');
        } else {
            function onScroll() {
                if (window.scrollY > 60) {
                    nav.classList.add('scrolled');
                } else {
                    nav.classList.remove('scrolled');
                }
            }
            window.addEventListener('scroll', onScroll, { passive: true });
            onScroll();
        }
    }

    // Highlight image animation (#img-carro)
    var imgCarro = document.getElementById('img-carro');
    if (imgCarro) {
        var imgObs = new IntersectionObserver(function(entries) {
            if (entries[0].isIntersecting) {
                imgCarro.classList.add('visible');
                imgObs.disconnect();
            }
        }, { threshold: 0.2 });
        imgObs.observe(imgCarro);
    }

});

