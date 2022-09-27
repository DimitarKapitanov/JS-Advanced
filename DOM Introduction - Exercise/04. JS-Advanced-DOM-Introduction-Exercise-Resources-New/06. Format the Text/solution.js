function solve() {
  //TODO
  let inputArea = document.getElementById('input').value.split('.').filter((p) => p.length > 0);
  let output = document.getElementById('output');
  for (let i = 0; i < inputArea.length; i+=3) {
    let arr = [];

    for (let y = 0; y < 3; y++) {
      if(inputArea[i+y]){
        arr.push(inputArea[i+y]);
      }
    }

    let para = arr.join('. ') + '.';

    output.innerHTML += `<p>${para}</p>`;
  }
}