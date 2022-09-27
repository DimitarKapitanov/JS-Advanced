function deck(face, suit) {
    const cardSuits = {
        'S': '\u2660',
        'H': '\u2665' ,
        'D': '\u2666 ' ,
        'C': '\u2663 ' 
    }

    const cardFace = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

    if(cardFace.indexOf(face) == -1){
        throw Error('Invalid face');
    }
    if (cardSuits[suit] == undefined) {
        throw Error('Invalid suit');
    }

    const result = {
        face ,  
        toString() {
        return face + cardSuits[suit];
    }};

    return result;
}
//console.log(deck('A', 'q'));
//console.log(deck('1', 'C'));
console.log(deck('A', 'S').toString());
console.log(deck('10', 'H').toString());
