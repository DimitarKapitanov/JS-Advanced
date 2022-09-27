function addItem() {
    let input = document.getElementById('newItemText').value;

    let ulItems = document.getElementById('items');
    //ulItems.addEventListener('click', deleteLiItems);

    let li = document.createElement('li');
    li.innerHTML = `${input} <a href = '#'>[Delete]<\a>`;

    let a = li.getElementsByTagName("a");
    
    for (let i = 0; i < a.length; i++) {
        if(a[i].textContent === '[Delete]'){
            a[i].addEventListener('click', deleteLiItems);
        }   
    }

    ulItems.appendChild(li);
    document.getElementById('newItemText').value = '';

    function deleteLiItems(item){
        let curItem = item.target.parentNode;
        curItem.remove();
    }
}