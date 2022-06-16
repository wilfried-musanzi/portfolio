const btnOpen = document.querySelector(".btn-open");
const btnClose = document.querySelector(".btn-close");
const header = document.querySelector(".header");
const sectionHero = document.querySelector(".section--hero");
const menu = document.querySelector('.nav__list');
const body = document.body;


const showMenu = () => {
    header.classList.add("nav__open");
    sectionHero.classList.add("blur");
    body.classList.add("unscrollable")
}

const hideMenu = () => {
    header.classList.remove("nav__open");
    sectionHero.classList.remove("blur");
    body.classList.remove("unscrollable");
}

btnOpen.addEventListener("click", showMenu);
btnClose.addEventListener("click", hideMenu);

sectionHero.addEventListener("click", () => {
    if (header.classList.contains("nav__open"))
        hideMenu();
})

menu.addEventListener('click', (e) => {
    e.preventDefault();
    if (!e.target.classList.contains('nav__link')) return
    hideMenu()
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({behavior: 'smooth'});
});
