function attachEventsListeners() {
    document.getElementById('convert').addEventListener('click', convertDistance);

    function convertDistance() {
        const inputDistance = Number(document.getElementById('inputDistance').value);
        let outputDistance = document.getElementById('outputDistance');

        const optionUnits = document.getElementById('inputUnits').value;
        const optionOutputUnits = document.getElementById('outputUnits').value;

        let calkSum = 0
        switch (optionUnits) {
            case 'km':
                calkSum = inputDistance * 1000;
                break;
            case 'm':
                calkSum = inputDistance * 1;
                break;
            case 'cm':
                calkSum = inputDistance * 0.01;
                break;
            case 'mm':
                calkSum = inputDistance * 0.001;
                break;
            case 'mi':
                calkSum = inputDistance * 1609.34;
                break;
            case 'yrd':
                calkSum = inputDistance * 0.9144;
                break;
            case 'ft':
                calkSum = inputDistance * 0.3048;
                break;
            case 'in':
                calkSum = inputDistance * 0.0254;
                break;
        }

        let outputSum = 0;

        switch (optionOutputUnits) {
            case 'km':
                outputSum = calkSum / 1000;
                break;
            case 'm':
                outputSum = calkSum / 1;
                break;
            case 'cm':
                outputSum = calkSum / 0.01;
                break;
            case 'mm':
                outputSum = calkSum / 0.01;
                break;
            case 'mi':
                outputSum = calkSum / 1609.34;
                break;
            case 'yrd':
                outputSum = calkSum / 0.9144;
                break;
            case 'ft':
                outputSum = calkSum / 0.3048;
                break;
            case 'in':
                outputSum = calkSum / 0.0254;
                break;
        }

        outputDistance.value = outputSum;
    }
}