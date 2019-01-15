// On met l'intervale de I'am not block sur 10s.
const interval = setInterval(() => console.log('I am not blocked'), 1000);
setTimeout(() => clearInterval(interval), 10000);

//création d'une file d'évènement
const file = [];

// fonction longue en terme de calcul mais réduite en nFois (voir heavyDo)
const notSoHeavyDo = nFois => {
    let count = 0;
    for (let i = 0; i < nFois; i++) {
        if (
            Math.round(
                Math.log(Math.sqrt(Math.abs(Math.round(Math.random() * 1e10))))
            ) === 1
        )
            count++;
    }
    return count;
};
// decoupage de la grande fonction en groupe 
const heavyDo = callback => {
    let total = 1e8,
        cuts = 100,
        counts = 0;
    for (let i = 0; i < cuts; i++) {
        file.push(() => {
            return notSoHeavyDo(total / cuts);
        });
    }
    executeEvent(counts, callback);
};
// permet l'execution de chaque evenement stacker dans la file
const executeEvent = (count, cb) => {
    // on défile notre file
    const event = file.shift();
    // on effectue l'event et on ajoute le retour
    count = count + event();
    // permet le changement de phase de l'event loop
    setImmediate(() => {
        if (file.length != 0) {
            executeEvent(count, cb);
        } else {
            cb(count);
        }
    });
};
// affichage de count lors de la fin du traitement
heavyDo(counts => console.log(counts));