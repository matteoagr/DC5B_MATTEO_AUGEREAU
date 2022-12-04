function exo8(n) {
    let res = []
    const limit = Math.pow(10, n)
    for (let i = 0; i < limit; i++) {
        res.push(i.toLocaleString('fr-FR', { minimumIntegerDigits: 2, }))
    }
    console.log(res)
}

exo8()