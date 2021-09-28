$(() => {
    let navLinks = $('.navbar .navbar-collapse .nav-link');
    navLinks.on('click', e => {
        navLink = $(e.target);
        navLinks.removeClass('active');
        navLink.addClass('active');
    });

    let navbarToggler = $('.navbar-toggler');
    navbarToggler.on('click', e => {
        if (!navbarToggler.hasClass('collapsed')) {
            navbarToggler.addClass('uncollapsed');
        } else {
            navbarToggler.removeClass('uncollapsed');
        }
    });
});