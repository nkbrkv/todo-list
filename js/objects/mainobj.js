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

export {listObj, menuObj, connectionObj};