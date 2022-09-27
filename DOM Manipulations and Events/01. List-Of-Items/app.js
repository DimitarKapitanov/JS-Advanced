function addItem() {
    let input = document.getElementById('newItemText').value;
    let ulItems = document.getElementById('items');
    let li = document.createElement('li');
    li.textContent = input;
    ulItems.appendChild(li);
    document.getElementById('newItemText').value = '';
}