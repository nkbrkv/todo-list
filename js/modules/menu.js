function renderMenu({obj, parent, element}) {
    const arr = Object.keys(obj);
    const parentElement = document.querySelector(parent);
    parentElement.textContent = '';

    arr.forEach((item, i) => {
        const newMenuItem = document.createElement('li');
        newMenuItem.classList.add(element);
        newMenuItem.innerHTML = `
                    <i class="fas fa-dot-circle main-menu__icon"></i>
                    <span data-menuItem=${i}>${obj[item].name}</span>
                    `;
        parentElement.append(newMenuItem);
    });
}

export default renderMenu;