function isNegative(num) {
    if (num % 1 != 0)
        return ("Veuillez rentrer un nombre entier")
    if (Math.sign(num) === -1) {
        return "N";
    }

    return "P";
}

console.log(isNegative());