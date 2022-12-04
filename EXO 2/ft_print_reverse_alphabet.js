function printAlphabetReverse() {
    let alphabet = ''
    for (i = 36; --i > 9;) {
        alphabet += i.toString(36)
    }
    console.log(alphabet)
}
printAlphabetReverse()