class Stone{
    constructor(x,y,radius){
        var option = {
            isStatic : false,
            restitution : 0,
            friction : 1,
            density : 1.2,
        }
        this.radius = radius;
        this.image = loadImage("stone.png");
        this.body = Bodies.circle(x,y,radius, option)
        World.add(world, this.body);
    }
    display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.radius*2,this.radius*2);
        pop();
      }
}