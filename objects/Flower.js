function Flower(_x, _y)
{
	this.x = _x;
	this.y = _y;
	this.radius = 30;
	this.speed = 1;
	
	this.dirX = 1;
	this.dirY = 0;
	
	this.red = 200;
	this.green = 0;
	this.blue = 255;
	
	this.show = true;
	
	
	this.colour = function(_red, _green, _blue)
	{
		this.red = _red;
		this.green = _green;
		this.blue = _blue;
	}
	
	
	this.draw = function()
	{
		if (this.show)
		{
			fill(this.red, this.green, this.blue);
			ellipse(this.x, this.y, 2 * this.radius, 2 * this.radius);
		}
	}
	
	this.changeDirX = function()
	{
		this.dirX *= -1;
	}
	
	this.moveX = function()
	{
		if (this.dirX == 1)
		{
			this.x += this.speed;
		}
		else
		{
			this.x -= this.speed;
		}
		
	}
	
	this.moveY = function()
	{
		this.y += 10;
	}
	
	this.shrink = function()
	{
		this.radius -= 2;
	}
	
}