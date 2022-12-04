function printAlphabet() {
    let alphabet = ''
    for (i = 9; ++i < 36;) {
        alphabet += i.toString(36);
    }
    console.log(alphabet)
}
printAlphabet()