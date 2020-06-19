var numJewelsInStones = function(J, S) {
    let Jewels = new Set(J);
    let count =0;
    for(let i=0;i<S.length;i++){
        if(Jewels.has(S.charAt(i))){
            count++;
}
}
    return count;
};
