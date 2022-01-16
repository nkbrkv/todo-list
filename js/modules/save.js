import * as mainobj from '../objects/mainobj';

function save() {
    localStorage.setItem('listObj', JSON.stringify(mainobj.listObj));
}

export default save;