function Flower(_x, _y)
{
	this.x = _x;
	this.y = _y;
	
	this.red = 200;
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
		ellipse(this.x, this.y, 60, 60);
		
	}
	
	this.move = function(_x)
	{
		if (_x < 0) this.x -= this.speed;
		else this.x += this.speed;
		
	}

}