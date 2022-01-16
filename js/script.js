'use strict';

import * as mainobj from './objects/mainobj';
import toggleMenu from './modules/burger';
import renderMenu from './modules/menu';
import connectMenuWithContent from './modules/connection';
import addItem from './modules/additem';
import addList from './modules/addlist';


document.addEventListener('DOMContentLoaded', () => {
    
    toggleMenu('#burger', '.main-menu');
    renderMenu(mainobj.menuObj);
    connectMenuWithContent(mainobj.connectionObj);
    addList(mainobj.listObj);
    addItem(mainobj.listObj);
    
});