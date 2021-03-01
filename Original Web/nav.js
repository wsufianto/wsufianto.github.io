// enable 'active' class on nav.navigation, .nav-burger, .nav-items
document.addEventListener('DOMContentLoaded', () => {

    // get navigation elements for active class toggle
    let navbar = document.getElementById('navBar');
    let navBurger = document.getElementById('navBurger');
    let navItems = document.getElementById('navItems');
        // get all navItems with id navItem
    let navItem = document.querySelectorAll('#navItem');

    // on nav-burger click, toggle active class
    navBurger.addEventListener('click', () => {
        navbar.classList.toggle('active');
        navBurger.classList.toggle('active');
        navItems.classList.toggle('active');

        // disable body scroll
        document.body.style.overflow = 'hidden';

        // on nav-item click, remove active class and enable body scroll
        navItem.forEach( el => {
            el.addEventListener('click', () => {
                navItems.classList.remove('active');
                navBurger.classList.remove('active');
                navbar.classList.remove('active');
                    // enable scroll on body
                document.body.style.overflow = 'scroll';
            });
        });
    });
});