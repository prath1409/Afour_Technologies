class Player{
    name: string;
    health: number;
    isInvincible: boolean;
    crush: Player;

    greet(): void{
        console.log(`Hello, my name is ${this.name}`);
    }
}

const mario=new Player();
mario.name='Mario';
mario.health=10;
mario.isInvincible=true;


const peach=new Player();
peach.name='Peach';
peach.health=8;
peach.isInvincible=true;

mario.greet();
peach.greet();


