function Player(_x, _y, _xRange, _yRange)
{
	this.x = _x;	
	this.y = _y;
	this.xRange = _xRange;
	this.yRange = _yRange;
	this.red = 0;
	this.green = 0;
	this.blue = 0;	
	this.hozSpeed = 0;
	this.vertSpeed = 0;
	this.jumpSpeed = 7;
	this.moveSpeed = 4;
	
	
	this.colour = function(_red, _green, _blue)
	{
		this.red = _red;
		this.green = _green;
		this.blue = _blue;
	}
	this.jitter = function(amount)
	{
		var amountLow = amount * -1;
		
		this.end.x += random(amountLow, amount);
		this.end.y += random(amountLow, amount);
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