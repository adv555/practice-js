import './js/changeTheme';
import menu from './menu.json';
import creatMenuMarkup from './templates/menu-item.hbs';

// =========== создает разметку по шаблону ===========//

const menuContainer = document.querySelector('.js-menu');
menuContainer.insertAdjacentHTML('afterbegin', creatMenuMarkup(menu));
