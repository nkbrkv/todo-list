'use strict';

import toggleMenu from './modules/burger';
import renderMenu from './modules/menu';
import connectMenuWithContent from './modules/connection';
// import addItem from './modules/additem';

document.addEventListener('DOMContentLoaded', () => {

    class Note {
        constructor(arr, name) {
            this.arr = arr;
            this.name = name;
        }
    }

    let listObj = [];

    const menuObj = {
        obj: listObj,
        parent: '.main-menu__list',
        element: 'main-menu__item'
    };
    const connectionObj = {
        attr: 'data-menuItem', 
        obj: listObj, 
        elementClassName: 'main-todo__item', 
        parentElement: '.main-todo__list'
    };
    
    toggleMenu('#burger', '.main-menu');
    renderMenu(menuObj);
    connectMenuWithContent(connectionObj);

    document.querySelector('#menu__btn').addEventListener('click', () => {
        listObj.push(new Note([], 'new List'));
        renderMenu(menuObj);
        connectMenuWithContent(connectionObj);
    });

    document.querySelector('.main-todo__button_add').addEventListener('click', event => {
        addItem(listObj, '.main-todo__list', event.target);
    });

});