class Particle{
    constructor(x,y,r){
       var options = {
           isStatic: false,
           restitution: 0.3,
           friction:0.01,
           density:4       
       }
     
       this.r = r
       this.particle = Bodies.circle(x,y,this.r,options)
       this.color = color(random(0,255),random(0,255),random(0,255))
       World.add(world,this.particle)
    }

    display(){
    var pos =this.particle.position;
    var angle = this.particle.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    ellipseMode(RADIUS)
    fill(this.color)
    ellipse(0,0,this.r,this.r);   
    pop();
    }
}
