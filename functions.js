
function keyPressed()
{
	if (keyCode === RIGHT_ARROW)
	{
		ship.move(1);
		
	}
	else if (keyCode === LEFT_ARROW)
	{
		ship.move(-1);
	}
}
