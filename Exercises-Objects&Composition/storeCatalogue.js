function storeCatalogue(input) {
    input.sort((a, b) => a.localeCompare(b));
    let previosLether = '';
    for (const iterator of input) {
        let product = iterator.split(' : ');
        let curLether = product[0].charAt(0);

        if(previosLether !== curLether){
            console.log(curLether);
            previosLether = curLether;
        }
        console.log(`  ${product[0]}: ${product[1]}`)
    }
}

storeCatalogue(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']);

storeCatalogue(['Banana : 2',
    'Rubic\'s Cube : 5',
    'Raspberry P : 4999',
    'Rolex : 100000',
    'Rollon : 10',
    'Rali Car : 2000000',
    'Pesho : 0.000001',
    'Barrel : 10']);