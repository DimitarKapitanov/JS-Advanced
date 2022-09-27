function solve(arr = []) {
    class Car {
        constructor(carBrand) {
            this.carName = carBrand;
            this.carModels = [];
        }
    }

    class Model{
        constructor(carModel, producedCars){
            this.carModel = carModel;
            this.producedCars = Number(producedCars);
        };
    }
    const result = [];

    arr.reduce((res,mode) => {
        let [carBrand, carModel, producedCars] = mode.split(' | ');

        const car = new Car(carBrand);
        const model = new Model(carModel, producedCars);

        if (!result.find(e => e.carName === carBrand)) {
            car.carModels.push(model);
            result.push(car);

        } else {
            let currCar = result.find(e => e.carName === carBrand);

            if(!currCar.carModels.find(e => e.carModel === model.carModel)){
                currCar.carModels.push(model);
            }else{
                currCar.carModels.find(e => e.carModel === model.carModel).producedCars += Number(producedCars);
            }
        }
    },{});

    for (const i of result) {
        console.log(`${i.carName}`);
        for (const e of i.carModels) {
            console.log(`###${e.carModel} -> ${e.producedCars}`)
        }
    }

}


solve(['Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10']
);