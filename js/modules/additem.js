import * as mainobj from '../objects/mainobj';
import renderContent from "./content";
import save from './save';

function addItem(listObj) {
        document.querySelector('.main-todo__button_add').addEventListener('click', () => {
                let input = document.querySelector('.main-todo__input_add').value;
                const id = document.querySelector('.main-todo__list').getAttribute('data-id');
        
                mainobj.listObj[id].arr.push(input);
                document.querySelector('.main-todo__list').textContent = '';
        
                renderContent(
                    mainobj.listObj[id].name,
                    mainobj.listObj[id].arr,
                    'main-todo__item',
                    id
                );
                save();
            });
}

export default addItem;