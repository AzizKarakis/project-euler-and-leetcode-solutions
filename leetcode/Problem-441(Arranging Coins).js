const arrangeCoins = (n) => {
    let sum = 0;
    let i = 1;
    while (sum <= n) {
        sum += i;
        i++;
    }
    return i - 2;
};
