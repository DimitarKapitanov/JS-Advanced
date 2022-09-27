function solve(tiketsInput, sortParams) {
    class Ticket {
        constructor(destinationName, price, status) {
            this.destination = destinationName;
            this.price = Number(price);
            this.status = status;
        }
    }
    const tikets = []
    tiketsInput.forEach(element => {
        const [destinationName, price, status] = element.split('|');
        const tiket = new Ticket(destinationName, price, status);
        tikets.push(tiket);
    });

    if (sortParams == 'destination') {
        tikets.sort((a, b) => a.destination.localeCompare(b.destination));
    } else if (sortParams == 'price') {
        tikets.sort((a, b) => a - b);
    } else {
        tikets.sort((a, b) => a.status.localeCompare(b.status));
    }
    return tikets;
}

solve(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'destination'
)