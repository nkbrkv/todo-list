import Note from '../objects/note';
import * as mainobj from '../objects/mainobj';
import renderMenu from "./menu";
import connectMenuWithContent from "./connection";
import save from './save';

function addList(listObj) {
    document.querySelector('#menu__btn').addEventListener('click', () => {
        let name = document.querySelector('.main-menu__input_add').value;
        listObj.push(new Note([], name));
        renderMenu(mainobj.menuObj);
        connectMenuWithContent(mainobj.connectionObj);
        save();
    });
}

export default addList;