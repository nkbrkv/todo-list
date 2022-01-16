function renderContent(title = 'List', arr = [], elementClassName) {
    const titleElement = document.querySelector('.main-todo__title');
    const listsParent = document.querySelector('.main-todo__list');

    titleElement.textContent = title;
    arr.forEach(item => {
        const listItem = document.createElement('li');
        listItem.classList.add(elementClassName);
        listItem.innerHTML = `
                <input class="main-todo__checkbox" type="checkbox" name="todo-item" id="">
                <span class="main-todo__body">${item}</span> 
                `;
        listsParent.append(listItem);
    });  
}

export default renderContent;