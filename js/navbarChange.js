navbar = document.querySelector("#mainNav");
contentSection = document.querySelector(".main--content");
navLinks = [...document.querySelectorAll(".navbar--link")];
navButtons = [...document.querySelectorAll(".navbar--button")];
btn = document.getElementById("menu-btn");
nav = document.getElementById("menu");

hamLines = [...document.querySelectorAll(".ham-line")];
console.log(hamLines);

document.addEventListener("scroll", (e) => {
    const navHeight = 70;

    const distanceFromTop = Math.abs(document.body.getBoundingClientRect().top);

    if (distanceFromTop >= navHeight) {
        navbar.classList.add("navbar--fixed");
        navLinks.forEach((link) => {
            link.classList.add("navbar--link--fixed");
            link.classList.remove("navbar--link--relaitve");
        });
        navButtons.forEach((btn) => {
            btn.classList.add("navbar--button--fixed");
            btn.classList.remove("navbar--button--relative");
        });

        hamLines.forEach((line) => {
            line.classList.remove("hamburger--relative");
            line.classList.add("hamburger--fixed");
        });
    }

    if (distanceFromTop < navHeight) {
        navbar.classList.remove("navbar--fixed");
        navLinks.forEach((link) => {
            link.classList.add("navbar--link--relative");
            link.classList.remove("navbar--link--fixed");
        });
        navButtons.forEach((btn) => {
            btn.classList.remove("navbar--button--fixed");
            btn.classList.add("navbar--button--relative");
        });
        hamLines.forEach((line) => {
            line.classList.remove("hamburger--fixed");
            line.classList.add("hamburger--relative");
        });
    }
});

btn.addEventListener("click", () => {
    btn.classList.toggle("open");
    nav.classList.toggle("flex");
    nav.classList.toggle("hidden");
});
