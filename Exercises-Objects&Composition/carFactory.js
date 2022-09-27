function carFactory(input){
    const car = {
        model: input.model,
        engine: {power: '', volume: ''},
        carriage: {type: '', color: ''},
        wheels: [],
    };

    if (input.power <= 90) {
        car.engine.power = 90;
        car.engine.volume = 1800;
    } else if(input.power <= 120) {
        car.engine.power = 120;
        car.engine.volume = 2400;
    }else{
        car.engine.power = 200;
        car.engine.volume = 3500;
    }

    if(input.carriage === 'hatchback'){
        car.carriage.type = input.carriage;
    }else if(input.carriage == 'coupe');{
        car.carriage.type = input.carriage;
    }

    car.carriage.color = input.color;

    if(input.wheelsize % 2 == 0){
        input.wheelsize -= 1;
    }

    for (let i = 0; i < 4; i++) {
        car.wheels.push(input.wheelsize);
    };
    //console.log(car.engine);
    //console.log(car.carriage);
    //console.log(car.wheels);

    return car;
}

console.log(carFactory({ model: 'VW Golf II',
power: 90,
color: 'blue',
carriage: 'hatchback',
wheelsize: 14 }
));

console.log(carFactory({ model: 'Opel Vectra',
power: 110,
color: 'grey',
carriage: 'coupe',
wheelsize: 17 }
));