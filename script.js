/* Load the navbar as the window is loaded */
const navbar = document.getElementById("navbar");
const header = document.getElementById("header");
window.addEventListener("DOMContentLoaded", () => {
  navbar.innerHTML = `<header class="navbar-header">
                        <button id="close-navbar-menu" class="js-close-navbar close-navbar-button">
                          <ion-icon name="close-outline"></ion-icon>
                        </button>
                        <img onclick="window.location.href='index.html'" class="housekit-logo-navbar" src="images/header-images/housekit-logo.png">
                      </header>
                        <ul>
                          <li>
                            <a href=#><ion-icon class="navbar-icons" name="person-circle-outline"></ion-icon>My Account</a>
                          </li>
                          <li>
                            <a href=#><ion-icon class="navbar-icons" name="cart-outline"></ion-icon>My Cart</a></li>
                          <li>
                            <a href=#><ion-icon class="navbar-icons" name="home-outline"></ion-icon>Furnitures</a></li>
                          <li>
                            <a href=#><ion-icon class="navbar-icons" name="pricetags-outline"></ion-icon>Latest Offers</a></li>
                          <li>
                            <a href=#><ion-icon class="navbar-icons" name="information-circle-outline"></ion-icon>About Us</a></li>
                          <li>
                            <a href=#><ion-icon class="navbar-icons" name="people-outline"></ion-icon>Customer Service</a></li>
                          <li>
                            <a href=#><ion-icon class="navbar-icons" name="call-outline"></ion-icon>Contact Us</a></li>
                          <button onclick="window.location.href='login.html'" class="sign-in-button navbar-sign-in">
                            Sign In
                          </button>
                        </ul>`;
  header.innerHTML = `<div class="left-section">
                        <img
                          id="open-navbar-menu"
                          class="hamburger-menu-icon"
                          src="images/header-images/hamburger-menu-icon.png"
                        />
                        <img
                          onclick="window.location.href='index.html'"
                          class="housekit-logo"
                          src="images/header-images/housekit-logo.png"
                        />
                      </div>
                      <div class="right-section">
                        <button class="header-buttons">Furniture</button>
                        <button class="header-buttons">Outdoor</button>
                        <button class="header-buttons">Bedding</button>
                        <button class="header-buttons">Bath</button>
                        <button class="header-buttons">Rugs & Mattresses</button>
                        <button class="header-buttons">Kitchen</button>
                        <button class="header-buttons">Search by Room</button>
                        <button
                          onclick="window.location.href='login.html'"
                          class="sign-in-button"
                        >
                          Sign In
                        </button>
                      </div>`;
  /* To handle the Main Page Navbar */
  const openNavbar = document.getElementById("open-navbar-menu");
  const closeNavbar = document.getElementById("close-navbar-menu");

  openNavbar.addEventListener("click", () => {
    handleNavbarMenu();
  });

  closeNavbar.addEventListener("click", () => {
    handleNavbarMenu();
  });

  function handleNavbarMenu() {
    navbar.classList.toggle("open-navbar");
  }
});

/* To handle User Login when they do not input a Username or Password */
const loginWrapper = document.getElementById("login-wrapper");
const usernameInput = document.getElementById("login-username");
const passwordInput = document.getElementById("login-password");
const loginSubmit = document.getElementById("login-submit");
const loginErrorMessage = document.getElementById("login-error-message");

/* ONLY do this action if we are in the login page */
if (loginSubmit) {
  loginSubmit.addEventListener("click", (e) => {
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
}
