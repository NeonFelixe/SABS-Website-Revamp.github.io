
const menuIcon = document.getElementById('menu-icon');
const menuItems = document.querySelector('.nav-wrapper ul');

menuIcon.addEventListener('click', () => {
    menuItems.classList.toggle('show');
});
