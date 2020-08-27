class Mango{
    constructor(x,y,radius){
        var option = {
            isStatic : true,
            restitution : 0,
            friction : 1,
        }
        this.radius = radius;
        this.image = loadImage("mango.png");
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