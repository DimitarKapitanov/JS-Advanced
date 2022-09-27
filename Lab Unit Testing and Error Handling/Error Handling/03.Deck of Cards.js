function printDeckOfCards(cards) {
    let deck = [];    

    for (const item of cards) {
        let suit = item.slice(-1);
        let face = item.slice(0,-1);
        try {
            deck.push(createCard(face, suit));
        } catch (error) {
            deck = ['Invalid card: '+ item];
        }
    }

    console.log(deck.join(' '));

    function createCard(face, suit) {
        const cardSuits = {
            'S': '\u2660',
            'H': '\u2665',
            'D': '\u2666 ',
            'C': '\u2663 '
        }

        const cardFace = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

        if (cardFace.indexOf(face) == -1) {
            throw Error('Invalid face '+ face);
        }
        if (cardSuits[suit] == undefined) {
            throw Error('Invalid suit ' + suit);
        }

        const result = {
            face,
            suits: cardSuits[suit],
            toString() {
                return face + cardSuits[suit];
            }
        };

        return result;
    }
}

printDeckOfCards(['AS', '10D', 'KH', '2C']);
printDeckOfCards(['5S', '3D', 'QD', '1C']);

