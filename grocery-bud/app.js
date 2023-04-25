const container = document.querySelector('.container')
const listItemContainer = document.querySelector('.list-items');
const button = document.querySelector('.btn');
const input = document.querySelector('.add-item');
const clearAll = document.querySelector('.clear')
let toBeUpdated;


const createListItem = (input) => {
    const listItem = document.createElement('div');
    const item = document.createElement('span');
    const iconContainer = document.createElement('div');
    const edit = document.createElement('span');
    const remove = document.createElement('span');

    container.classList.add('active');
    listItem.classList.add('list-item');
    item.classList.add('item');
    item.textContent = input;
    iconContainer.classList.add('bi-class')
    edit.innerHTML = '<i class="bi bi-pencil-square">';
    remove.innerHTML = '<i class="bi bi-trash3">';

    edit.onclick = editItem;
    remove.onclick = deleteItem;

    listItemContainer.appendChild(listItem)

    listItem.appendChild(item);
    listItem.appendChild(iconContainer);

    iconContainer.appendChild(edit);
    iconContainer.appendChild(remove);
}

const deleteItem = (e) => {
    const container = e.target.parentElement.parentElement.parentElement.parentElement;
    const listItem = e.target.parentElement.parentElement.parentElement;
    container.removeChild(listItem);
    if(!listItemContainer.innerHTML){
        clearList()
    }
}

const editItem = (e) => {
    const listItem = e.target.parentElement.parentElement.previousSibling;
    editThisItem(listItem);
}

const addListItem = () => {
    const text = input.value;
    if(!text){return}
    
    if(toBeUpdated){
        updateListItem(toBeUpdated)
    }
    else{
        createListItem(text);
    }
    input.value = "";
    toBeUpdated = undefined;
}

const editThisItem = (item) => {
    input.value = item.textContent
    toBeUpdated = item;
}

const clearList = () => {
    listItemContainer.innerHTML = "";
    container.classList.remove('active')
}

const updateListItem = (item) => {
    item.textContent = input.value;
}

button.onclick = addListItem;
clearAll.onclick = clearList;