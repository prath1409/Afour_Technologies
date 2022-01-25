abstract class Character{
    hunger:number;
    health:number;

    abstract eat(): void;
}

interface Hero extends Character{
    heroId:number;
}

interface Enemy extends Character{
    enemyId:number;
}

class Spy implements Hero, Enemy{
    hunger: number;
    health: number;
    heroId:number;
    enemyId:number;

    eat(): void {
        this.hunger-=1;
    }
}

const hero: Hero=new Spy();
const enemy: Enemy=new Spy();   
hero.hunger=90;
hero.eat();
enemy.eat();
console.log(hero.hunger);
console.log(enemy.hunger);