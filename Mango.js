class Mango{
    constructor(x,y,r){
        var options = {
            isStatic:true,
            restitution:0.5
        }
        this.bodies = Bodies.circle(x,y,r,options);
        this.r = r;
        World.add(world,this.bodies);
    }
    display(){
        var pos = this.bodies.position;

        push();
        translate(pos.x,pos.y);
        console.log(pos);
        rotate(this.bodies.angle);
        ellipseMode(CENTER);
        imageMode(CENTER);
        image(m1Img,0,0,this.r,this.r);
        pop();
    }
}