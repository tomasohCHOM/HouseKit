/* To handle the Main Page Navbar */
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

/* To handle User Login when they do not input a Username or Password */
const loginWrapper = document.getElementById('login-wrapper');
const usernameInput = document.getElementById('login-username');
const passwordInput = document.getElementById('login-password');
const loginSubmit = document.getElementById('login-submit');

loginSubmit.addEventListener('click', (e) => {
    e.preventDefault();
    let errorMessage = "";
    if (usernameInput.value == "" || usernameInput.value == null) {
        errorMessage = "Please input a correct username.";
        const errorElement = document.body.createElement('p');
        errorElement.innerHTML = errorMessage;
        loginWrapper.appendChild(errorElement);
    } else if (passwordInput.value == "" || passwordInput.value == null) {
        errorMessage = "Please input a correct password.";
    }
});