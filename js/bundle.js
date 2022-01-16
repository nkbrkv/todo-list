/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/burger.js":
/*!******************************!*\
  !*** ./js/modules/burger.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toggleMenu);

/***/ }),

/***/ "./js/modules/connection.js":
/*!**********************************!*\
  !*** ./js/modules/connection.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _content__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./content */ "./js/modules/content.js");


function connectMenuWithContent({attr, obj, elementClassName, parentElement}) {
    let arr = document.querySelectorAll(`[${attr}]`);
    
    arr.forEach(item => {
        item.addEventListener('click', event => {
            document.querySelector(parentElement).textContent = '';
            if (event.target) {
                let id = item.getAttribute(attr);
                (0,_content__WEBPACK_IMPORTED_MODULE_0__["default"])(
                    obj[id].name,
                    obj[id].arr,
                    elementClassName
                );
            }
        });
    });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connectMenuWithContent);

/***/ }),

/***/ "./js/modules/content.js":
/*!*******************************!*\
  !*** ./js/modules/content.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderContent);

/***/ }),

/***/ "./js/modules/menu.js":
/*!****************************!*\
  !*** ./js/modules/menu.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderMenu);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_burger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/burger */ "./js/modules/burger.js");
/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ "./js/modules/menu.js");
/* harmony import */ var _modules_connection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/connection */ "./js/modules/connection.js");





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
    
    (0,_modules_burger__WEBPACK_IMPORTED_MODULE_0__["default"])('#burger', '.main-menu');
    (0,_modules_menu__WEBPACK_IMPORTED_MODULE_1__["default"])(menuObj);
    (0,_modules_connection__WEBPACK_IMPORTED_MODULE_2__["default"])(connectionObj);

    document.querySelector('#menu__btn').addEventListener('click', () => {
        listObj.push(new Note([], 'new List'));
        (0,_modules_menu__WEBPACK_IMPORTED_MODULE_1__["default"])(menuObj);
        (0,_modules_connection__WEBPACK_IMPORTED_MODULE_2__["default"])(connectionObj);
    });

    document.querySelector('.main-todo__button_add').addEventListener('click', event => {
        addItem(listObj, '.main-todo__list', event.target);
    });

});
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map