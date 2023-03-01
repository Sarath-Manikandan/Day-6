// write a class to calculate the uber price.
class Uber{
    constructor(name,km){
        this.name=name;
        this.km=km;
    }
    price(){
        return this.km*18;
    }
}
var u1=new Uber("guvi",32);
console.log(u1.price())