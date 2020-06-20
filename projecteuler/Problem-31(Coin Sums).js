function solution(target) {
    var coins = [1, 2, 5, 10, 20, 50, 100, 200];
    var table = new Uint32Array(target + 1);
    table[0] = 1;
    for (var i = 0; i < coins.length; i++) {
      for (var j = coins[i]; j <= target; j++) {
        table[j]+= table[j - coins[i]]; (Eisele, 2014)
  
     }
    }
    return table[target];
  }
  