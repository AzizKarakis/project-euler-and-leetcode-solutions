var shortestToChar = function(S, C) {
    const char_array = Array.from({ length: S.length }, () => 0);
    let index = S.length;
    for(let i = 0; i< S.length; i++) {
        if(S[i] === C) {
           index = i;
        }
        char_array[i] = Math.abs(index - i);
    }
    for(let i = S.length -1; i>=0; i--) {
        if(S[i] === C) {
            index = i
        }
        char_array[i] = Math.min(char_array[i], Math.abs(index - i));
    }
    return char_array;
};
