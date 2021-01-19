class Stone{
    constructor(x,y,r){
        var options = {
            isStatic:false,
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
        imageMode(CENTER);
        image(stoneImg,0,0,60,60);
        pop();
    }
}