class Stone{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
			restitution :0,
            friction :1,
            density:0.5
			}
	    
		
		this.body=Bodies.circle(x,y,r, options);
        this.r=r;
        this.image=loadImage("images/stone.png");
		World.add(world, this.body);
	}

	

	display()
	{
		
		push();
		translate(this.body.position.x,this.body.position.y);
        //fill(255,0,255)
		imageMode(CENTER);
		//ellipseMode(CENTER);
        //rotate(this.body.angle);
		image(this.image,0,0,this.r*3,this.r*3);
		pop();
		
		
		
 }
}