let toggleMenu = false;
const hamburgerMenu = document.getElementById('hamburger-menu');
const closeNavbar = document.getElementById('close-navbar-menu');
const navbar = document.getElementById('navbar');

hamburgerMenu.addEventListener('click', () => {
    toggleMenu = true;
    handleNavbarMenu();
});

closeNavbar.addEventListener('click', () => {
    toggleMenu = false;
    handleNavbarMenu();
});

function handleNavbarMenu() {
    navbar.className = (toggleMenu ? ('open-navbar') : ('closed-navbar'));
}