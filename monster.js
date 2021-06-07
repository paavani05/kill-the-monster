class Monster {
    constructor(x,y,width,height) {
        var options = {
            isStatic: true,
            restitution: 0.5,
            friction: 1
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.image = loadImage("https://raw.githubusercontent.com/paavani05/kill-the-monster/main/monster.png");
        World.add(world, this.body);
        }
        display(){
            push();
            translate(this.body.position.x, this.body.position.y);
            imageMode(CENTER);
            image(this.image, 0 , 0, this.width, this.height);
            pop();
        }
    }