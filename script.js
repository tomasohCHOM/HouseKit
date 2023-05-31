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
const loginErrorMessage = document.getElementById('login-error-message');

loginSubmit.addEventListener('click', (e) => {
    e.preventDefault();
    let errorMessage = "";
    if (usernameInput.value == "" || usernameInput.value == null) {
        errorMessage = "Please input a correct username.";
    } else if (passwordInput.value == "" || passwordInput.value == null) {
        errorMessage = "Please input a correct password.";
    } else {
        if (passwordInput.value.length < 6 || passwordInput.value.length > 20) {
            errorMessage = "Password must be between 6 and 20 characters.";
        }
    }
    loginErrorMessage.textContent = errorMessage;
});