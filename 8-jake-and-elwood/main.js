const navigationOpen = document.querySelector('.open-nav');
const navigationClose = document.querySelector('.close-nav');
const navigationMenu = document.querySelector('.nav');

navigationOpen.addEventListener('click', () => {
    navigationMenu.classList.add('navigation-open');
});

navigationClose.addEventListener('click', () => {
    navigationMenu.classList.remove('navigation-open');
});
