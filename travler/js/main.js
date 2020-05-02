const clickButton = document.querySelector('.toggle-icon');
clickButton.addEventListener('click', () => {
    document.querySelector('.header-nav').classList.toggle('show-nav');
});
