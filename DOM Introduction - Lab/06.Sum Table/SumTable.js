function sumTable() {
    const a = document.querySelectorAll('tr');
    let sum = document.getElementById('sum');

    for (let i = 1; i < a.length-1; i++) {
        sum += a[i+1].textContent;
    }
}