function Drop(_x, _y)
{
	this.x = _x;
	this.y = _y;
	this.radius = 10
	
	this.exists = true;
	
	this.speed = 5;
	
	this.red = 50;
	this.green = 0;
	this.blue = 255;	
	
	this.draw = function()
	{
		fill(this.red, this.green, this.blue);
		ellipse(this.x, this.y, 2 * this.radius, 2 * this.radius);
		
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
	
	this.intersecting = function(object)
	{
		var distance = dist(this.x, this.y, object.x, object.y);
		
		if (distance < this.radius + object.radius)
		{
			return true;
		}
		else
		{
			return false;
		}

	}
	
	this.kill = function()
	{
		this.exists = false;
	}


}