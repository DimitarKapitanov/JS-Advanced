function solve() {
    let input = document.querySelectorAll('input');
    
    const btn = document.querySelectorAll('button');
    btn[0].addEventListener('click', checkResult);
    btn[1].addEventListener('click', clrear);


    let table = document.querySelector('table');
    let checkP = document.getElementById('check').firstElementChild;

    function clrear(){
        [...input].forEach(e=>{
             e.value ='';
             table.style.border = '';
             checkP.textContent = ''
             checkP.style.color = ''
            });
    }

    function checkResult() {
        const matrix = [
            [input[0].value, input[1].value, input[2].value],
            [input[3].value, input[4].value, input[5].value],
            [input[6].value, input[7].value, input[8].value]
        ];

        isValid = true;

        for (let i = 0; i < matrix.length; i++) {
            let row = matrix[i];
            let col = matrix.map(row => row[i]);
            if(col.length != [...new Set(col)].length || row.length != [...new Set(row)].length){
                isValid = false;
                break;
            }
        }

        if(isValid){
            table.style.border = '2px solid green';
            checkP.textContent = 'You solve it! Congratulations!'
            checkP.style.color = 'green'
        }else{
            table.style.border = '2px solid red';
            checkP.textContent = 'NOP! You are not done yet...'
            checkP.style.color = 'red'
        }
    }
}