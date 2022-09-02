'use strict';

const menuBlockHead = document.querySelectorAll('.menu__block-head');

for (let i = 0; i < menuBlockHead.length; i++) {
    menuBlockHead[i].addEventListener('click', function() {
        this.parentElement.querySelector('.menu__block-list').classList.toggle('show');
        this.classList.toggle('active');
    });
}
