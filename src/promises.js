const john = 'John';
const arya = 'Arya';
const sensa = 'Sensa';
const say = hero => sentence => Promise.resolve(`${hero} says : ${sentence}`);
const johnSay = say(john);
const aryaSay = say(arya);
const sensaSay = say(sensa);
let cmpt = 0;

const interval = setInterval(() => sensaSay('For the North').then(value => {
    console.log(value);
    aryaSay('The king in the North').then(value => {
        console.log(value);
        if (cmpt === 0) {
            johnSay('Winter is coming').then(value => {
                console.log(value);
            });
            cmpt++;
        }
    });
}), 1000);
//interval sur 11s car pas réussi à mettre sur 10s sinon il manque une itération
setTimeout(() => {
    clearInterval(interval)
}, 11000);