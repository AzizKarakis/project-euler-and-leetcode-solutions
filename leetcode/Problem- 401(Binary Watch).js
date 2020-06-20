var readBinaryWatch = function(num) {
    let res =[];
    function bitCount (n) {
        n = n - ((n >> 1) & 0x55555555)
        n = (n & 0x33333333) + ((n >> 2) & 0x33333333)
        return ((n + (n >> 4) & 0xF0F0F0F) * 0x1010101) >> 24
    }

    for (let h = 0; h < 12;h++){
        for (let m = 0; m < 60; m++){
            if (bitCount(h) + bitCount(m) == num){  
                let str = "";
                str += h;
                str += ":";
                str += (m < 10 ? "0" : "");
                str += m;
                res.push(str);
            }
        }
    }
    return res;
};
