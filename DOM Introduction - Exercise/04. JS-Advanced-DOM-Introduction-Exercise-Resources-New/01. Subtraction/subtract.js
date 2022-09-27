function subtract() {
    const firstNumb = Number(document.getElementById('firstNumber').value);
    const secondNumb = Number(document.getElementById('secondNumber').value);
    document.getElementById('result').textContent = firstNumb - secondNumb;
}