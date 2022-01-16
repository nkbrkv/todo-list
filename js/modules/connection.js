import renderContent from './content';

function connectMenuWithContent({attr, obj, elementClassName, parentElement}) {
    let arr = document.querySelectorAll(`[${attr}]`);
    
    arr.forEach(item => {
        item.addEventListener('click', event => {
            document.querySelector(parentElement).textContent = '';
            if (event.target) {
                let id = item.getAttribute(attr);
                renderContent(
                    obj[id].name,
                    obj[id].arr,
                    elementClassName
                );
            }
        });
    });
}

export default connectMenuWithContent;