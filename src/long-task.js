function coroutine(f) {
    var o = f(); // instantiate the coroutine
    o.next(); // execute until the first yield
    return function (x) {
        o.next(x);
    }
}

var test = coroutine(function* () {
    let count = 0;
    console.log("yolllllooooooo");
    for (let i = 0; i < 1e8; i++) {
        /*if (i % 2 == 0) {
            yield;
            console.log("Je laisse passée");
        }*/
        yield;
        if (
            Math.round(
                Math.log(Math.sqrt(Math.abs(Math.round(Math.random() * 1e10))))
            ) === 1
        )

            count++;
    }
    console.log(count);
});

let interval = setInterval(() => {
    console.log('I am blocked')
    test();
}, 1000)
setTimeout(() => clearInterval(interval), 100000);