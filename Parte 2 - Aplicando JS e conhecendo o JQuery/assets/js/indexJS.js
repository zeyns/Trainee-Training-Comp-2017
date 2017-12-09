/* Using Pure Javascript */

/* When a click occurs on the tag with btnNewCard ID */
document.getElementById("btnNewCard").onclick = function()
{
	/* Change the display of the tag with btnNewCard ID to none */
	document.getElementById("btnNewCard").style.display = "none";
	/* Enter an html code in the tag with ID listCards */
	document.getElementById("listCards").innerHTML +=
		"<li class=\"col-sm-12 col-md-3 col-l-3 col-xl-3\">"
			+"<div class=\"card\">"
				+"<img src=\"assets/media/img/pokemon.jpg\" class=\"img-card\">"
				+"<p>Pokemon</p>"
			+"</div>"
		+"</li>"

}
