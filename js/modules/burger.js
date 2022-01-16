function toggleMenu(burger, menuObj) {
    const btn = document.querySelector(burger);
    const menu = document.querySelector(menuObj);

    function showMenu(item) {
        item.classList.remove('hide');
        item.classList.add('show');
    }

    function hideMenu(item) {
        item.classList.remove('show');
        item.classList.add('hide');
    }

    btn.addEventListener('click', event => {
        if (event.target && menu.classList.contains('hide')) {
            showMenu(menu);
        } else {
            hideMenu(menu);
        }
    });
}

export default toggleMenu;