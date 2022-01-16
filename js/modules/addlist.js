import Note from '../objects/note';
import * as mainobj from '../objects/mainobj';
import renderMenu from "./menu";
import connectMenuWithContent from "./connection";

function addList(listObj) {
    document.querySelector('#menu__btn').addEventListener('click', () => {
        listObj.push(new Note([], 'new List'));
        renderMenu(mainobj.menuObj);
        connectMenuWithContent(mainobj.connectionObj);
    });
}

export default addList;