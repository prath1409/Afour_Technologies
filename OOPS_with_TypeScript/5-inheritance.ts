class animal{
    health:number;
    eat(){
        console.log("I'm eating..");
    }
    sleep(){
        console.log("I'm sleeping..");
    }
    move(){
        console.log("I'm moving..");
    }
    makeNoise(){
        console.log("I'm making Noise..");
    }
}

class Dog extends animal{
    makeNoise(){
        console.log('Barking');
    }
}
class Cat extends animal{

}

const dog=new Dog();
dog.makeNoise();
const cat=new Cat();
cat.makeNoise();