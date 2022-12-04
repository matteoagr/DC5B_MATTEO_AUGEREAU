function exo6() {
    let res = [];
    for (let i = 0; i < 100; i++) {
        for (let j = i + 1; j < 100; j++) {
            res.push(i.toLocaleString('fr-FR', { minimumIntegerDigits: 2, }) + " " + j.toLocaleString('fr-FR', { minimumIntegerDigits: 2, }))
        }
    }
    console.log(res)
}