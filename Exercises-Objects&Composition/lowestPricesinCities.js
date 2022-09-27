function lowestPricesInCities(input) {
    const result = [];

    for (const iterator of input) {
        let [townName, productName, productPrice] = iterator.split(' | ');
        productPrice = Number(productPrice);
        let currentProductName = productName;

        let index = result.findIndex(function (product, index) {
            if (product.productName == currentProductName)
                return true;
        });

        if (index >= 0) {
            if (result[index].productPrice > productPrice) {
                result[index].productPrice = productPrice;
                result[index].townName = townName;
            };
        } else {
            result.push({ townName, productName, productPrice });
        };
    }

    for (const city of result) {
        console.log(`${city.productName} -> ${city.productPrice} (${city.townName})`);
    }
}

lowestPricesInCities(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10']
);
lowestPricesInCities(['Sofia City | Audi | 100000',
    'Sofia City | BMW | 100000',
    'Sofia City | Mitsubishi | 10000',
    'Sofia City | Mercedes | 10000',
    'Sofia City | NoOffenseToCarLovers | 0',
    'Mexico City | Audi | 1000',
    'Mexico City | BMW | 99999',
    'Mexico City | Mitsubishi | 10000',
    'New York City | Mitsubishi | 1000',
    'Washington City | Mercedes | 1000]']);