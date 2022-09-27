function generateReport() {
    //TODO
    let tableHeader = Array.from(document.getElementsByTagName('input'));

    let tableHeaderIndex = tableHeader.map((num, index) => {
        if (num.checked) {
            return index;
        }
    });

    let tableBodyRow = Array.from(document.querySelectorAll('tbody > tr'));
    const result = [];
    for (let i = 0; i < tableBodyRow.length; i++) {
        const curRow = tableBodyRow[i].children;
        const object = {};

        for (let y = 0; y < tableHeaderIndex.length; y++) {
            if (tableHeaderIndex[y] === undefined) {
                continue;
            }
           
            object[tableHeader[y].name] = curRow[y].textContent;
            
        }

        result.push(object);

    }
    document.getElementById('output').value = JSON.stringify(result);
}