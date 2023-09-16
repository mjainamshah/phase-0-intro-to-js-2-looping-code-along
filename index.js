// Code your solutions in this file
function writeCards(names, cardName) {
    const messages = [];

    for (let i = 0; i < names.length; i++) {
        messages.push(`Thank you, ${names[i]}, for the wonderful ${cardName} gift!`);  
    }

    return messages;
}

function countDown(number) {
    while (number > -1) {
        console.log(number);
        number--;
    }
}