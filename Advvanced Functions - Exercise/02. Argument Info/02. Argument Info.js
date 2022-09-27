function solve(...input) {
    const result = {};

    for (const i of input) {
        console.log(typeof (i) + ': ' + i);
        if(result[typeof(i)] == undefined){
            result[typeof(i)] = 1;
            continue;
        }
        result[typeof(i)] += 1;
    }

    const sortable = Object.entries(result)
    .sort(([,a],[,b]) => b-a);

    for (const elements in sortable) {
        if (Object.hasOwnProperty.call(sortable, elements)) {
            const element = sortable[elements];
            console.log(`${element[0]} = ${element[1]}`);
        }
    }
}

solve('cat', 42, function () { console.log('Hello world!'); }, 'Pesho');
solve({ name: 'bob'}, 3.333, 9.999);