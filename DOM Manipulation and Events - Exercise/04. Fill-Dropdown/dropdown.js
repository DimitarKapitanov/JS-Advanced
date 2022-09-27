function addItem() {
    let textItem = document.getElementById('newItemText');
    let valueItem = document.getElementById('newItemValue');

    let menuId = document.getElementById('menu');

    let option = document.createElement('option');
    option.value = valueItem.value;
    option.text = textItem.value;
    menuId.appendChild(option);

    textItem.value = '';
    valueItem.value = '';
}