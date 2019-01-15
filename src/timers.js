const john = 'John';
const arya = 'Arya';
const sensa = 'Sensa';
const say = hero => sentence => console.log(`${hero} says : ${sentence}`);
const johnSay = say(john); // may be used this way setTimeout(johnSay, 1000, 'hello');  
const aryaSay = say(arya);
const sensaSay = say(sensa);


const interval = setInterval(sensaSay, 1000, 'For the north');
const timeOutJohn = setTimeout(johnSay, 2000, 'hello Ladies Stark');
const immediateArya = setTimeout(aryaSay, 2001, 'thank you for needle');

setTimeout(timeOutJohn => {
    immediateArya;
});

setTimeout(() => {
    clearInterval(interval)
}, 10000);