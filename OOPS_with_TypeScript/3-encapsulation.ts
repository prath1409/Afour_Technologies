class player{
    private health: number;
    private speed: number;

    getdata(health: number, speed: number): void{
        this.health=health;
        this.speed=speed;
    }

    showdata(){
        console.log('health is ' + this.health + ' and speed is ' + this.speed);
    }
}

const mario=new player();
mario.getdata(10, 100);
mario.showdata();

const peach=new player();
peach.getdata(7, 99);
peach.showdata();