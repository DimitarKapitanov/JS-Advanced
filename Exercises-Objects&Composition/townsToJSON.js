function townsToJson(input) {
    const result = [];

    for (let i = 1; i < input.length; i++) {
        const element = input[i].split('|');
        element.pop();
        element.shift();

        const towns = {};
        towns['Town'];
        towns['Latitude'];
        towns['Longitude'];

        towns.Town = element[0].trim();
        towns.Latitude = Number(element[1].trim()).toFixed(2);
        towns.Longitude = Number(element[2].trim()).toFixed(2);

        result.push(towns);
    }
    console.log(JSON.stringify(result, function (key, value) {
        if (key == "Latitude") {
            return Number(value);
        } else if (key == "Longitude") {
            return Number(value);
        } else {
            return value;
        }
    }));
}

townsToJson(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']
);

townsToJson(['| Town | Latitude | Longitude |',
    '| Veliko Turnovo | 43.0757 | 25.6172 |',
    '| Monatevideo | 34.50 | 56.11 |']
);
