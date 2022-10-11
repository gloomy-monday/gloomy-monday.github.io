"Use strict";

const content = {

	0 : {
		'file' : 'cuatro-mil',
		'title' : 'Cuatro mil calles efímeras',
		'wordcount' : '0.3 mil',
		'quote' : 'Su cara era un borrón, como siempre, y su voz era lo único a lo que podía atenerme. Eso no entorpecía nuestra amistad.'
	},

	1 : {
		'file' : 'bossanova',
		'title' : '<i>Bossa Nova</i>',
		'wordcount' : '1.7 mil',
		'quote' : 'Su orgullo le decía que dijese que no le necesitaba para nada más. El resto de él, su cobardía (suponía), quería decirle a los ojos que no tenía ni una sucia moneda encima.'
	},

	2 : {
		'file' : 'hotel-de-carretera',
		'title' : 'En un hotel de carretera',
		'wordcount' : '1.4 mil',
		'quote' : 'Tenía ganas de preguntarle si de verdad había matado a alguien. Pero era consciente de que preguntar directamente es la mejor manera de que a uno le mientan.'
	},

	3 : {
		'file' : 'perro-rabioso',
		'title' : 'Perro rabioso',
		'wordcount' : '4.6 mil',
		'quote' : 'Es de broma, juro que es sólo de broma. Pero él desvía la mirada y no dice nada. Este gilipollas me hace sentir como un gilipollas.'
	},

	4 : {
		'file' : 'juegos-de-mesa',
		'title' : 'Juegos de mesa',
		'wordcount' : '2.6 mil',
		'quote' : 'Estoy aquí, por supuesto que no estoy bien.'
	},

	5 : {
		'file' : 'exclusiva',
		'title' : 'Exclusiva',
		'wordcount' : '3 mil',
		'quote' : 'Ponte a escribir algún artículo de opinión que la gente odie y les obligue a hacer click.'
	}
}



//Crea las cartas
function fillUp() {
	let keys = Object.keys(content);
	for (let i = 0; i < keys.length; i++) {
		console.log(i);
		let title = content[keys[i]].title;
		let quote = content[keys[i]].quote;
		let wordcount = content[keys[i]].wordcount;
		let frontPage = document.getElementById("front-page");
		console.log(frontPage);
		frontPage.innerHTML += `  <div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <h3>${title}</h3>
      <p><span class="lightgold">(</span>${wordcount} palabras<span class="lightgold">)</span></p>
    </div>
    <div id="${i}" class="flip-card-back" onclick="showStory()">
      <blockquote id="${i}"><span class="darkgold">"</span>${quote}<span class="darkgold">"</span></blockquote>
    </div>
  </div>
</div>`
	}
}

//Muestra la historia de la carta clickeada
function showStory(){
	selectedStory = content[event.target.id].file
	console.log(selectedStory);
	document.getElementById("front-page").classList.add('disabled');
	document.getElementById("storytime").classList.remove('disabled');
	document.getElementsByTagName("iframe")[0].src = `${selectedStory}.html`

}

//Vuelve al índice
document.getElementById("backb").addEventListener('click', () => {
	document.getElementById("storytime").classList.add('disabled');
	document.getElementById("front-page").classList.remove('disabled');
})

fillUp();

/*

<article>
 		<h3>${title}</h3>
    	<blockquote><span style="color:var(--lightgold);font-size:2.5rem;">"</span>
    	${quote}<span style="color:var(--lightgold);font-size:2.5rem;">"</span></blockquote>
  		</article>`*/