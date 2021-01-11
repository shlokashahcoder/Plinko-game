class Plinko{
    constructor(x,y,r){
        var options={
            isStatic: true
        }
        this.x = x
        this.y = y 
        this.r = r
        this.plinko = Bodies.circle(this.x,this.y,this.r,options)
        World.add(world,this.plinko)
    }
    display(){
        var pos= this.plinko.position
        var angle= this.plinko.angle
        push();
        translate(pos.x,pos.y)
        rotate(angle)
        ellipseMode(RADIUS)
        fill("white")
        ellipse(0,0,this.r,this.r)
        pop();
    }
} 