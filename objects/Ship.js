function Ship()
{
	this.x = width / 2;	
	this.y = height - 50;
	this.width = 20;
	this.height = 40;
	
	this.midX = this.x + (this.width / 2);
	this.midY = this.y + (this.height / 2);
	
	this.speed = 6;
	this.xdir = 0;
	
	this.red = 255;
	this.green = 0;
	this.blue = 255;	
	
	
	this.colour = function(_red, _green, _blue)
	{
		this.red = _red;
		this.green = _green;
		this.blue = _blue;
	}
	
	
	this.draw = function()
	{
		fill(this.red, this.green, this.blue);
		rect(this.x, this.y, this.width, this.height);
		
	}
	
	this.setDir = function(dir)
	{
		this.xdir = dir;
	}
	
	this.move = function(dir)
	{
		this.x += this.xdir * this.speed;
	}

}