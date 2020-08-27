class Throw{
	constructor(body,pointB){
		var options={
            bodyA:body,			 
			pointB:pointB, 
			stiffness:0.004, 
			length:1
		}
		
		this.bodyA=body
		this.pointB=pointB
		this.throw=Constraint.create(options)
		World.add(world,this.throw)
	}

	attach(body){
		this.throw.bodyA=body;
	}

	fly(){
		this.throw.bodyA=null;
	}

	display(){
		if(this.throw.bodyA)
		{
			var pointA=this.bodyA.position;
			var pointB=this.pointB
		
			line(pointA.x,pointA.y,pointB.x,pointB.y);
		}
	}
}