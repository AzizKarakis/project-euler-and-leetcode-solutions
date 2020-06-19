function isPrime(number){
    if(number <= 1){return false;}
    if(number == 2){return true;}
    if(!(number%2)){return false;}
    var maxCheck = Math.floor(Math.sqrt(number));
    for(var i = 3; i <= maxCheck; i+=2){
        if(!(number%i)){return false;}
    }
    return true;
}

function isPrimeArray(number){
    return isPrime(parseInt(""+number[0]+number[1]+number[2]+number[3]+number[4]+number[5]+number[6]+number[7]+number[8]));
}

function search(number){
    if(isPrimeArray(number)){
        console.log(number);
    }
    searchH(number,0);
}

function searchH(number,index){
    if(index >= number.length){return;}
    searchH(number,index+1);
    
    var copy;
    var indexNumber = number[index];
    for(var i = index+1; i < number.length; i++){
        copy = number.slice();
