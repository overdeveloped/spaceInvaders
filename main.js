var ship;
var drops = [];
var flowers = [];

function setup()                            			 // START SETUP():
{
	createCanvas(600, 400);
	noStroke();
	ship = new Ship();
	
	//drop = new Drop(ship.midX, ship.y);
	
	for (var x = 0; x < 6; x ++)
	{
		flowers[x] = new Flower(x * 80 + 80, 50);	
	}
	
	
}														 // END SETUP() //




function draw()                               			// START DRAW():
{
	background(51);
	ship.draw();
	ship.move();
	
	for (var i = 0; i < drops.length; i ++)	// DROPS
	{
		drops[i].draw();
		drops[i].move(ship.xdir);
		//if (drops[i].y < 0) drops.splice(0, 1);  // DROP LIMIT
		
		for (var j = 0; j < flowers.length; j ++)
		{
			if (drops[i].intersecting(flowers[j]))
			{
				flowers[j].shrink();
				
				drops[i].kill();
				
				if (flowers[j].radius == 0)
				{
					flowers[j].show = false;
				}
			}
		}		

	}

	
	for (var x = 0; x < flowers.length; x ++) // FLOWERS
	{
		var current = flowers[x];
		current.draw();
		current.moveX();
		if (current.x > width - current.radius || current.x < current.radius) // FLOWERS MOVE
			{
				for (var i = 0; i < flowers.length; i ++)
				{
					flowers[i].changeDirX();
					flowers[i].moveY();
				}
				
			}
	}
	
	for (var i = drops.length - 1; i >= 0; i --)	// DROPS
	{
		if (!drops[i].exists)
		{
			drops.splice(i, 1);
		}
	}
	
	
}														// END DRAW //





/*
	function keyPressed()
	{
		if (keyCode === LEFT_ARROW)
		{
			player.x -= player.speed;
		}	
		else if (keyCode === RIGHT_ARROW)
		{
			player.x += player.speed;
		}
		else if (keyCode === UP_ARROW)
		{
			player.y -= player.speed;
		}
		else if (keyCode === DOWN_ARROW)
		{
			player.y += player.speed;
		}
	}
*/







