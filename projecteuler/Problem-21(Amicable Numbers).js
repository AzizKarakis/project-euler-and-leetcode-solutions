function Prob21(){
    //sum of proper divisors
    this.d = function(n){
        var sum = 1;
        var d = 2;
        while(d*d <= n){
            if(!(n%d)){
                //console.log(d,n/d);
                if(d*d==n){
                    //Complement is itself so add only once
                    sum += d;
                }else{
                    sum += d;
                    sum += n/d;
                }
                
            }
            d++;
        }
        return sum;
    };


    this.eval = function(){
        var sum = 0;
        var max = 10000;
        var b;
        for(var a=1;a<max;a++){
            b = this.d(a);
            if(b != a && this.d(b) == a){
                sum+=a;
                console.log(a,b);
            }
        }
        return sum;
    };
}