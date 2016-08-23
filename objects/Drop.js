function Drop(_x, _y)
{
	this.x = _x;
	this.y = _y;
	
	this.speed = 5;
	
	this.red = 50;
	this.green = 0;
	this.blue = 255;	
	
	this.draw = function()
	{
		fill(this.red, this.green, this.blue);
		ellipse(this.x, this.y, 20, 20);
		
	}

	this.colour = function(_red, _green, _blue)
	{
		this.red = _red;
		this.green = _green;
		this.blue = _blue;
	}
	
	this.move = function()
	{
		this.y -= this.speed;
		
	}

}