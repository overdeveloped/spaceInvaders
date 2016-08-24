
function keyReleased()
{
	ship.setDir(0);
	ship.midX = ship.x + (ship.width / 2);
}

function keyPressed()
{
	
	if (key === " ")
	{
		var drop = new Drop(ship.midX, ship.y);
		drops.push(drop);
		/*	
		if (drops.length < 3)	// DROP LIMIT
		{
			var drop = new Drop(ship.midX, ship.y);
			drops.push(drop);
		}
		*/
	}
	
	
	if (keyCode === RIGHT_ARROW)
	{
		ship.setDir(1);
		
	}
	else if (keyCode === LEFT_ARROW)
	{
		ship.setDir(-1);
	}
}
