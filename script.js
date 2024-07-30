let burgerMenu = document.querySelector(".burger-menu");
let burgerMenuBtn = document.querySelector(".burger-menu-btn");
let burgerMenuCloseBtn = document.querySelector(".burger-menu .close-btn");

burgerMenuBtn.addEventListener("click", (event) => {
    burgerMenu.classList.remove("hidden");
    burgerMenu.classList.add("show");
});

burgerMenuCloseBtn.addEventListener("click", () => {
    burgerMenu.classList.remove("show");
    burgerMenu.classList.add("hidden");
});