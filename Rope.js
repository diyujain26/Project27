class Rope {
    constructor(body1,body2,offsetX,offsetY){
            this.offsetX=offsetX
            this.offsetY=offsetY
            var options = {
            bodyA:body1,
            bodyB:body2,
            //stiffness:0.04,
            //length:10
            pointB:{x:this.offsetX,y:this.offsetY}
            //this .body = Bodies.rectangle(restitution:0.2,{isStatic:true});
        }
            this.rope=Constraint.create(options)
            World.add(world,this.rope)
    }
    display(){
            var pointA=this.rope.bodyA.position;
            var pointB=this.rope.bodyB.position;
        
            strokeWeight(5)

            stroke(0)
            fill("red")

            var Anchor1X=pointA.x
            var Anchor1Y=pointB.y

            var Anchor2X=pointB.x+this.offsetX
            var Anchor2Y=pointB.y+this.offsetY

            line(Anchor1X,Anchor1Y,Anchor2X,Anchor2Y);
    }
}