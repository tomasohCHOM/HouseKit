const openNavbar = document.getElementById('open-navbar-menu');
const closeNavbar = document.getElementById('close-navbar-menu');
const navbar = document.getElementById('navbar');

openNavbar.addEventListener('click', () => {
    handleNavbarMenu();
});

closeNavbar.addEventListener('click', () => {
    handleNavbarMenu();
});

function handleNavbarMenu() {
    navbar.classList.toggle('open-navbar');
}