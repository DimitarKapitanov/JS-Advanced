function solve() {
  let text = document.getElementById('text').value.toLowerCase().split(' ');
  let convention = document.getElementById('naming-convention').value;
  const result = [];

  if (convention === 'Camel Case') {
    result.push(text[0]);

    for (let i = 1; i < text.length; i++) {
      let firstElement = text[i].charAt(0).toUpperCase() + text[i].slice(1);
      text[i] = firstElement;
      result.push(text[i]);
    }
  } else if (convention === 'Pascal Case') {
    for (let i = 0; i < text.length; i++) {
      let firstElement = text[i].charAt(0).toUpperCase() + text[i].slice(1);
      text[i] = firstElement;
      result.push(text[i]);
    }
  } else{
    result.push('Error!');
  }

  document.getElementById('result').textContent = result.join('');
}