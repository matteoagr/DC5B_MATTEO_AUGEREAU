function exo5() {
    let res = []
    for (let i = 0; i < 1000; i++) {
        let n = i
        let first = n % 10;
        n = n - first;
        let second = n % 100;
        n = n - second;
        second = second / 10
        let third = n % 1000 / 100;
        if (first != second && first != third && second != third) {
            if (third < second && second < first) {
                res.push(i).tolocalestring;
            }
        }
    }
    console.log(res);
}