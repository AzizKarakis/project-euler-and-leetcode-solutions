var isPowerOfTwo = function(n) {
    if(n <= 0) return false
    if(n == 1) return true
    let num = n
    
    while (num > 1) {
        if(num%2 !== 0) return false
        if(num == 2) return true
        num = num/2
    }
};
