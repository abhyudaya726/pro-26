class Tree{
    constructor(x,y,l,h){
        var options = {
            isStatic:true
        }
        this.bodies = Bodies.rectangle(x,y,l,h,options);
        this.l = l;
        this.h = h;
        World.add(world,this.bodies);
    }
    display(){
        var pos = this.bodies.position;

        push();
        translate(pos.x,pos.y);
        console.log(pos);
        rectMode(CENTER);
        rect(0,0,this.l,this.h);
        pop();
    }
}