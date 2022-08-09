const navDefault = {

	pic : "<img src='spaderphoto.png'>",
	title : "¿Por qué James Spader?",
	text : "Sencillo. James Spader es guapísimo. Con su pelazo rubio tostado, su sonrisa vendecoches, su físico atlético y su aire como de que te escucha cuando hablas y te responde algo inteligente… Es difícil resistir a sus encantos. ¿Pero cuántos guapos de Hollywood hay? ¿Cuántos indistinguibles unos de otros? Pero ninguno es James Spader, eso está claro. Su <i>charm point</i> son esos ojos negros como una noche sin luna en ese cutis de estrella. Esos ojos que parecen puertas al vacío, inexpresivos como los de un pez en la lonja.<br> <br> Spader es guapo pero algo siniestro. Muy siniestro, cuando quiere. Al parecer le interesa todo lo “raro” y elige los papeles que interpreta en base a eso. No en balde (y como se verá en esta lista), tiende a transitar las veredas de lo limítrofe a la vida en sociedad. Personajes con doble rasero, compulsiones sexuales anómalas, corrompidos por la seducción del mal… Curiosamente parece sentirse más cómodo cuando más recovecos tiene su personaje. Le vi en un telefilme para toda la familia y tenía pinta de estar en penitencia.<br><br> Así que, acompañadme por esta paseo a través de la carrera de este señor hasta que básicamente encuentre algo mejor que hacer.</p>"
};


function showReview(movie) {
	document.getElementById("movielist").style.display = "none";
	document.getElementById("moviereview").style.display = "block";
	director = movieInfo[movie].director;
	title = "<i>" + movie +"</i> " + "(" + movieInfo[movie].year + ")";
	cast = movieInfo[movie].cast.join(', ');
	poster = movieInfo[movie].poster;
	review = movieInfo[movie].review;
	screenshot = movieInfo[movie].screenshot;
	document.getElementById("navpic").innerHTML = poster;
	document.getElementById("navtitle").innerHTML = title;
	document.getElementById("navtext").innerHTML = "<b>Director:</b> " + director + "<br><br> <b>Reparto:</b> " + cast;
	document.getElementById("reviewtext").innerHTML = review;
	document.getElementById("screen").style.backgroundImage = screenshot

};

function showDefault() {
	document.getElementById("moviereview").style.display = "none";
	document.getElementById("movielist").style.display = "grid";
	document.getElementById("navpic").innerHTML = navDefault['pic'];
	document.getElementById("navtitle").innerHTML = navDefault['title'];
	document.getElementById("navtext").innerHTML = navDefault['text'];
}