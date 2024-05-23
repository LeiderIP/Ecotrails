document.addEventListener('DOMContentLoaded', function () {
    const navToggle = document.getElementById('nav-toggle');
    const main = document.querySelector('main');
    const slideContainer = document.querySelector('.slide-container');

    navToggle.addEventListener('change', function () {
        if (this.checked) {
            main.style.marginLeft = 'calc(var(--navbar-width-min) + 2vw)';
            slideContainer.style.marginLeft = 'calc(var(--navbar-width-min) + 2vw)';
        } else {
            main.style.marginLeft = 'calc(var(--navbar-width) + 2vw)';
            slideContainer.style.marginLeft = 'calc(var(--navbar-width) + 2vw)';
        }
    });a
});
