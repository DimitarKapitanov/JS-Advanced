function calculator() {
    let num1Input = null;
    let num2Input = null;
    let resultInput = null;

    return {
        init,
        add,
        subtract
    }

    function init(num1, num2, result) {
        num1Input = document.querySelector(num1);
        num2Input = document.querySelector(num2);
        resultInput = document.querySelector(result);
    }
    function add() {
        resultInput.value = Number(num1Input.value) + Number(num2Input.value);
    }
    function subtract() {
        resultInput.value = Number(num1Input.value) - Number(num2Input.value);
    }
}


