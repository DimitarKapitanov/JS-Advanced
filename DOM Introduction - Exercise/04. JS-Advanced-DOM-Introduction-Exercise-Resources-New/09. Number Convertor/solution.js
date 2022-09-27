function solve() {

    let input = document.getElementById('input');
    let selectTo = document.getElementById('selectMenuTo');
    let result = document.getElementById('result');
    const binary = document.createElement('option');
    binary.selected = false;
    binary.value = 'binary';
    binary.innerHTML = 'Binary';
    selectTo.appendChild(binary);

    const hexadecimal = document.createElement('option');
    hexadecimal.selected = false;
    hexadecimal.value = 'hexadecimal';
    hexadecimal.innerHTML = 'Hexadecimal';
    selectTo.appendChild(hexadecimal);

    let button = document.getElementsByTagName('button')[0].addEventListener('click', convert);

    function convert() {
        if (selectTo.value === 'binary') {
            result.value = Number(input.value).toString(2);
        } else {
            result.value = Number(input.value).toString(16).toUpperCase();
        }
    }
}