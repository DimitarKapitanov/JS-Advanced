function extract(content) {
    const regex = /\(([^)]+)\)/gm;
    let text = document.getElementById(content).textContent;

    // Alternative syntax using RegExp constructor
   //const regex = new RegExp(/\(([^)]+)\)/gm);
    const result = [];

    let m = regex.exec(text);

    while (m) {
        result.push(m[1]);
        m = regex.exec(text);
    }
    return result.join('; ');
}