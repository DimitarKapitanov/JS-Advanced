function validate() {
    let regex = /^[a-z]+([\.-_]?[a-z]+)*@\w+([\.-_]?[a-z]+)*(\.[a-z]{2,3})+$/;

    let input = document.getElementById('email');

    input.addEventListener('change', focusLost);
    function focusLost(item) {
        if (!item.target.value.match(regex)) {
            input.classList.add('error');
        } else {
            input.classList.remove('error');
        }
    }
}

function validate() {
    let reg = /^([\w\-.]+)@([a-z]+)(\.[a-z]+)+$/;
    let inputElement = document.getElementById('email');
    let value = inputElement.value;

    inputElement.addEventListener('change',checkEmail);

    function checkEmail(event) {
        if(reg.test(event.target.value)){
            event.target.removeAttribute('class');
            return;
        }

        event.target.className = 'error';
    }
 }