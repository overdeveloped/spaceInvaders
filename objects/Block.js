function Block(_x, _y, _xRange, _yRange)
{
	this.x = _x;
	this.y = _y;
	this.xRange = _xRange;
	this.yRange = _yRange;
	this.red = 0;
	this.green = 0;
	this.blue = 0;	
	
	
	this.colour = function(_red, _green, _blue)
	{
		this.red = _red;
		this.green = _green;
		this.blue = _blue;
	}
	
	this.draw = function()
	{
		fill(this.red, this.green, this.blue);
		rect(this.x, this.y, this.xRange, this.yRange)
		
	}
	
	this.move = function()
	{
		this.x += floor(random(-1, 1));
		this.y += floor(random(-1, 1));

	}
}