ndow.addEventListener("scroll", function () {
    var nav = document.querySelector("nav");
    nav.classList.toggle("scrolling-active", window.scrollY > 0);
});