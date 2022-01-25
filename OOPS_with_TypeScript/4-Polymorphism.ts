/*
class Character{
    health: number;

    move(){}
    playVoiceRecording() {}
}

class Mario extends Character{}
class Luigi extends Character{}
class Peach extends Character{}*/

class Hero{
    hunger:number;
    health:number;

    attack(){
        console.log("I'm attacking...");
    }

    move(){
        console.log("I'm moving...");
    }

    eat(){
        console.log("I'm eating...");
    }
}

class Archer extends Hero{
    arrows:number;
    attack(){
        super.attack();
        console.log("Firing an arrow");
        this.arrows-=1;
    }
}

// class Mage extends Hero{
//     mana:number;
//     attack(){
//         super.attack();
//         console.log("Throwing a potion");
//         this.mana-=1;
//     }
// }

// class Knight extends Hero{
//     sheild:number;
//     attack(){
//         //super.attack();
//         console.log("T'm swinging with a sword");
//     }
// }

/*
const archer=new Archer();
const mage=new Mage();
const knight=new Knight();

archer.attack();
mage.attack();
knight.attack();*/

const archer: Archer = new Archer();
archer.attack();
// const knight: Hero = new Knight();

// const bob: Hero = new Hero();