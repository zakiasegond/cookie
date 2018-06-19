
var div = $('#display');
var press = $('#click');
var score = 0;
var multiplier = 1;
var augmenter=$('#multiply');
var prix = 50;

	press.click (function()
	{
		score = score+multiplier;
		div.html(score);
	});


	augmenter.click (function ()
	{
		multiplier ++;
		score = score-prix;

		if (score<0)
		{
			score=0;
		}

		div.html(score);
		augmenter.html("Multiplicateur x " + multiplier);
		prix = prix * 2;

	});



