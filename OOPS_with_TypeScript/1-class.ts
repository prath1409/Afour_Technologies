class player{
    health: number;
    speed: number;

    greet(){
        console.log('Hello World');
    }
}

const mario=new player();
mario.health=10;
mario.speed=1;
mario.greet();
