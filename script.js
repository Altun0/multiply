class CustomMatch
{
    constructor(num=5) 
    {
      this.num=num;
    }
    plus(num){
      this.num+=num
      return this
     }
     minus(num){
        this.num-=num
        return this
    }
    multiply(num){
        this.num*=num
        return this
    }
    divide(num){
        this.num/=num
        return this
    }
}
var result=new CustomMatch(100).plus(6).minus(30).multiply(3).divide(2)
console.log(Object.values(result)); 





