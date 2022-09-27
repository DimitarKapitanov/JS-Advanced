function focused() {
    let input = document.getElementsByTagName('input');

    for (let i = 0; i < input.length; i++) {
        input[i].addEventListener('focus', focus);      
        input[i].addEventListener('blur', focusLost); 
    }

    function focus(item){
       let curItem = item.target.parentNode;
       curItem.classList.add('focused');
    }

    function focusLost(item){
        let curItem = item.target.parentNode;
        curItem.classList.remove('focused');
     }
}