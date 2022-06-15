const btnOpen = document.querySelector(".btn-open");
const btnClose = document.querySelector(".btn-close");
const header = document.querySelector(".header");
const sectionHero = document.querySelector(".section--hero");

btnOpen.addEventListener("click", () => {
    header.classList.add("nav__open");
    sectionHero.classList.add("blur");
})

btnClose.addEventListener("click", () => {
    header.classList.remove("nav__open");
    sectionHero.classList.remove("blur");
})