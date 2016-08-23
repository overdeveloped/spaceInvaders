function Branch(a, b)
{
	this.begin = a;
	this.end = b;
	this.finished = false;
	
	this.jitter = function(amount)
	{
		var amountLow = amount * -1;
		
		this.end.x += random(amountLow, amount);
		this.end.y += random(amountLow, amount);
	}
	
	this.show = function()
	{
		stroke(255, 0, 255);
		line(this.begin.x, this.begin.y, this.end.x, this.end.y);
	}
	
	this.branchA = function()
	{
		var dir = p5.Vector.sub(this.end, this.begin);
		dir.rotate(PI / 4);
		dir.mult(0.67);
		
		var newEnd = p5.Vector.add(this.end, dir);
		
		var b = new Branch(this.end, newEnd);
		
		return b;
	}
	
	this.branchB = function()
	{
		var dir = p5.Vector.sub(this.end, this.begin);
		dir.rotate(-PI / 4);
		dir.mult(0.67);
		
		var newEnd = p5.Vector.add(this.end, dir);
		
		var b = new Branch(this.end, newEnd);
		
		return b;
	}
}