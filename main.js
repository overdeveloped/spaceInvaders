var ship;
var drop;
var flowers = [];

function setup()                            			 // START SETUP():
{
	createCanvas(600, 400);
	noStroke();
	ship = new Ship();
	
	drop = new Drop(ship.midX, ship.y);
	
	for (var x = 0; x < 6; x ++)
	{
		flowers[x] = new Flower(x * 80 + 80, 50);	
	}
	
	
}														 // END SETUP() //




function draw()                               			// START DRAW():
{
	background(51);
	ship.draw();
	drop.draw();
	drop.move();
	
	for (var x = 0; x < flowers.length; x ++)
	{
		flowers[x].draw();
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







