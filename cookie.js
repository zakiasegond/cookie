console.log ('hello');
var div = $('#display');
var press = $('#click');
var score = 0;


	press.click (function()
	{
		score++;
		div.html(score);
	});



