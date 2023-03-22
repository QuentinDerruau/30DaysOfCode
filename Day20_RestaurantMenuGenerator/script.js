let menu = [];

let itemNameInput = document.getElementById('item-name');
let itemDescriptionInput = document.getElementById('item-description');
let itemPriceInput = document.getElementById('item-price');
let addItemButton = document.getElementById('add-item-button');
let menuList = document.getElementById('menu');

function addItem() {

	let itemName = itemNameInput.value;
    let itemDescription = itemDescriptionInput.value;
    let itemPrice = itemPriceInput.value;


	let item = {
        name: itemName,
        description: itemDescription,
        price: itemPrice
    };
    menu.push(item);


	let listItem = document.createElement('li');
    let itemText = document.createTextNode(itemName + ' - ' + itemDescription + ' - ' + itemPrice + '€');
    listItem.appendChild(itemText);
    menuList.appendChild(listItem);


	itemNameInput.value = '';
    itemDescriptionInput.value = '';
    itemPriceInput.value = '';
}
