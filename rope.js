class Rope{
    constructor(body1,point2){
        
        var options = {
            bodyA: body1,
          pointB: point2,
         stiffness:0.04,
         length:300  
        }
   this.pointB=point2
        this.rope = Matter.Constraint.create(options);
        World.add(world,this.rope);
       }
       display(){
          
           var point1 = this.rope.bodyA.position;
           push()
        stroke("pink")
           strokeWeight(4);

          
           line(this.pointB.x,this.pointB.y,point1.x,point1.y);
       pop();    
       }
   
   }