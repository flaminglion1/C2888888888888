class SlingShot{
constructor(b1,pointB){

    var options={
        bodyA:b1,
       pointB:pointB,
        stiffness:0.09,length:54
    }
this.chain = Constraint.create(options);
this.pointB = pointB
World.add(world,this.chain)
}
display(){
   if(this.chain.bodyA){
    var p1 = this.chain.bodyA.position
    var p2 = this.pointB
    strokeWeight(10)
    line (p1.x,p1.y,p2.x,p2.y);
   } 
}
fly(){
this.chain.bodyA=null


} 

}


