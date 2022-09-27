function deleteByEmail() {
    let input = document.querySelector('input').value;
    const tbody = document.getElementsByTagName('tbody')[0].children;
    let result = document.getElementById('result');
    let isDeleted = false;

    for (let i = 0; i < tbody.length; i++) {
        let element = tbody[i].children[1].textContent;
        if (element === input) {
            tbody[i].remove()
            isDeleted = true;
        }
    }
    if (isDeleted) {
        result.textContent = 'Deleted.';
    } else {
        result.textContent = 'Not found.'
    }
}