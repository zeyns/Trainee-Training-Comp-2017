
/* Usando JQUERY */

/* When a click occurs on the tag with btnNewCard ID */
$("#btnNewCard").click(function()
{
	/* Change the display of the tag with btnNewCard ID to none */
	$(this).hide();
	/* Enter an html code in the tag with ID listCards */
	$("#listCards").append(
		"<li class=\"col-sm-12 col-md-3 col-l-3 col-xl-3\">"
			+"<div class=\"card\">"
				+"<img src=\"assets/media/img/pokemon.jpg\" class=\"img-card\">"
				+"<p>Pokemon</p>"
			+"</div>"
		+"</li>"
	);
})

/* When a click occurs in the DOM on a daughter tag of a tag with ID listCards */
$("#listCards>li").click(function()
{
	/* Get this tag li and disappear with fade effect */
	$(this).fadeOut(600);
})
