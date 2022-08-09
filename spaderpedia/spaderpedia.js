function showReview(movie) {
	document.getElementById("movielist").style.display = "none";
	director = movieInfo[movie].director;
	title = "<i>" + movie +"</i> " + "(" + movieInfo[movie].year + ")";
	cast = movieInfo[movie].cast;
	poster = movieInfo[movie].poster;
	review = movieInfo[movie].review;
	document.getElementById("navpic").innerHTML = poster;
	document.getElementById("navtitle").innerHTML = title;
	document.getElementById("navtext").innerHTML = "Director: " + director + "<br><br> Reparto: " + cast

};

$(document).ready(function() {
	$("#reviewtext").load("crash-review.txt");
});