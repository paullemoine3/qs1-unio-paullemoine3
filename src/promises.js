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

setTimeout(() => {
    clearInterval(interval)
}, 11000);

//officiel 

const sensaThenArya = () =>
    sensaSay('For the North')
    .then(result => {
        console.log(result);
        return aryaSay('The king in the North');
    })
    .then(console.log);

sensaThenArya()
    .then(() => johnSay('Winter is coming'))
    .then(result => {
        console.log(result);
        return new Promise((res, rej) => {
            timer = setInterval(sensaThenArya, 1000);
            setTimeout(() => {
                clearInterval(timer);
                res();
            }, 10000);
        });
    })
    .catch(err => console.error(err));