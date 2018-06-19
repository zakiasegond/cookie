// CODE QUI PERMET DE CREER UN BOUTON CLICK  

var div = $('#display');
var press = $('#click'); //variable qui permet de créer le bouton score (voir cookie.html ligne 11)
var score = 0; // correspond a mon score qui est eagal a 0 pour le moment.
var multiplier = 1; // correspond a ma valeur 
var augmenter=$('#multiply'); // correspond a mon bouton multiplier ( voir page html ligne 12)
var prix = 50; 

	press.click (function() // permet de créer un compteurs clic +1 ( score)
	{
		score = score+multiplier;
		div.html(score);
	});


	augmenter.click (function () // permet de créer un compteur clic (multiplicateur)
	{
		multiplier ++;
		score = score-prix; // permet d'associer le score au prix afficher.

		if (score<0) // permet de ne pas avoir un score negatif.
		{
			score=0;
		}

		div.html(score);
		augmenter.html("Multiplicateur x " + multiplier);
		prix = prix * 2; // permet de multiplier le multiplicateur par 2

	});



