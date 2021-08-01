<<<<<<< HEAD
import cards from './teamplates/menu-cards.hbs';
import menuItem from './menu.json';
import './change-theme';
import './styles.css';


let menu = document.querySelector('.js-menu');

function buildMenu(array) {
    const markup = array.map(cards).join('');
    menu.insertAdjacentHTML('beforeend', markup);
}

buildMenu(menuItem);
=======

import './css/styles.css';
import './js/theme-change.js';
>>>>>>> aca41e47a38be042b6adc8061c999f7cef9fc85f
