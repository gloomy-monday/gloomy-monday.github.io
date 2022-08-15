const categories = ["miscel", "html", "css", "javascript", "apisdb"]

const miscel = {

	'C O N V E R T I O' : {
		'url' : 'https://convertio.co/',
		'desc' : 'Conversor de imágenes a mil formatos.'
	},

	'R W&ensp;D E S I G N E R - C U R S O R&ensp;L I B R A R Y' : {
		'url' : 'http://www.rw-designer.com/cursor-library/set-0',
		'desc' : 'Cursores bonitos y feos.'
	},

	'C O D E P E N' : {
		'url' : 'https://codepen.io/',
		'desc' : 'Para trastear con código HTML/JS/CSS.'
	},

	'J S&ensp;F I D D L E' : {
		'url' : 'https://jsfiddle.net/',
		'desc' : 'Para trastear con código HTML/JS/CSS.'
	},

	'C O D E C A D E M Y' : {
		'url' : 'https://www.codecademy.com/learn',
		'desc' : 'Escuela de programación/web development/data science.'
	},

	'S I T E P O I N T' : {
		'url' : 'https://www.sitepoint.com/',
		'desc' : 'Editorial digital de libros sobre diseño y desarrollo web.'
	},

	'W E B&ensp;C O N T E N T&ensp;A C C E S S I B I L I T Y&ensp;G U I D E L I N E S' : {
		'url' : 'https://www.w3.org/TR/WCAG21/',
		'desc' : 'Guía de recomendaciones de accesibilidad del W3C.'
	},

	'L I N D S A Y &ensp;H U M E S' : {
		'url' : 'https://www.lindsayhumes.com/custom-blog-design/',
		'desc' : 'Diseñadora de webs.'
	},
};

const html = {

	'D A T A T A B L E S' : {
		'url' : 'https://datatables.net/',
		'desc' : 'Tablas chulas HTML.'
	},

	'B E A U T I F U L&ensp;S O U P' : {
		'url' : 'https://www.crummy.com/software/BeautifulSoup/',
		'desc' : 'Limpia el HTML y lo deja bonito (en Python).'
	},

	'H T M L&ensp;T I D Y' : {
		'url' : 'http://www.html-tidy.org/',
		'desc' : 'Limpia el HTML y lo deja bonito usando la consola.'
	},

	'D O M - L I V I N G&ensp;S T A N D A R D' : {
		'url' : 'https://dom.spec.whatwg.org/',
		'desc' : 'Versión más actualizada del DOM.'
	},

	'H T M L&ensp;T R E E' : {
		'url' : 'https://yoksel.github.io/html-tree/en/',
		'desc' : 'Generador de un árbol de HTML.'
	},

	'H T M L 5&ensp;F O R M S&ensp;M A R K U P' : {
		'url' : 'https://www.sitepoint.com/html5-forms-markup/',
		'desc' : 'Resumen de los forms en HTML5.'
	},
};

const css = {

	'G O O G L E&ensp;F O N T S' : {
		'url' : 'https://fonts.google.com/',
		'desc' : 'Fuentes para webs y tal.'
	},

	'C S S&ensp;D U O T O N E' : {
		'url' : 'https://cssduotone.com/',
		'desc' : 'Generador de HTML + CSS de una imagen con mapa de degradado.'
	},

	'G R I D&ensp;C H E A T S H E E T' : {
		'url' : 'https://yoksel.github.io/grid-cheatsheet/',
		'desc' : 'Referencias de grids.'
	},

	'C S S&ensp;G R I D&ensp;G E N E R A T O R' : {
		'url' : 'https://cssgrid-generator.netlify.app/',
		'desc' : 'Generador de grids.'
	},
};

const javascript = {

	'J Q U E R Y&ensp;S E L E C T O R' : {
		'url' : 'https://www.w3schools.com/jquery/trysel.asp',
		'desc' : 'Selector JQuery.'
	},

	'E S 6&ensp;C O N S O L E' : {
		'url' : 'https://es6console.com/',
		'desc' : 'Consola de JavaScript.'
	},

	'B A B E L' : {
		'url' : 'https://babeljs.io/',
		'desc' : 'Adapta código de JS a otras versiones.'
	},

	'D O C C O' : {
		'url' : 'http://ashkenas.com/docco/',
		'desc' : 'Crea documentación a partir de comentarios de JS.'
	},

	'T Y P E S C R I P T' : {
		'url' : 'https://www.typescriptlang.org/',
		'desc' : 'Versión strogly typed de JS.'
	},

	'T R U T H Y&ensp;&&ensp;F A L S Y  V A L U E S' : {
		'url' : 'https://www.sitepoint.com/javascript-truthy-falsy/',
		'desc' : 'Mini guía sobre lo que JS considera true y false.'
	},

	'M O M E N T . J S' : {
		'url' : 'https://momentjs.com/',
		'desc' : 'Librería para métodos de fechas/zonas horarias.'
	},

	'L U X O N' : {
		'url' : 'https://moment.github.io/luxon/#/',
		'desc' : 'Moment.js pero más óptimo.'
	},

	'R E G E X&ensp;T E S T I N G' : {
		'url' : 'https://www.regextester.com/',
		'desc' : 'Para probar regular expressions.'
	},

	'R E G E X&ensp;1 0 1' : {
		'url' : 'https://regex101.com/',
		'desc' : 'Prueba y explica regular expressions.'
	},

	'R E G E X P . I N F O' : {
		'url' : 'https://www.regular-expressions.info/',
		'desc' : 'Información sobre las regular expressions.'
	},

	'V U E&ensp;S C H O O L' : {
		'url' : 'https://vueschool.io/courses?skill=beginner',
		'desc' : 'Cursitos de Vue.js.'
	},

	'T H E&ensp;A R T&ensp;O F&ensp;W E B<br>R A N D O M&ensp;M A Z E&ensp;G E N E R A T O R' : {
		'url' : 'https://www.the-art-of-web.com/javascript/maze-generator/',
		'desc' : 'Creador de laberintos aleatorios usando JS.'
	},

	'W E B&ensp;E V E N T S' : {
		'url' : 'https://developer.mozilla.org/en-US/docs/Web/Events',
		'desc' : 'Eventos web generales y que se suele utilizar para ejecutarlos.'
	},

	'K E Y C O D E . J S' : {
		'url' : 'https://github.com/nostrademons/keycode.js/blob/master/keycode.js',
		'desc' : 'Librería para normalizar los códigos de las keys en todos los navegadores, sobretodo las versiones viejunas (jQuery también hace esto con which, creo).'
	},

	'H A M M E R . J S' : {
		'url' : 'http://hammerjs.github.io/',
		'desc' : 'Librería para detectar gestos en dispositivos táctiles sin tener que montar un circo.'
	},

	'Z I N G T O U C H' : {
		'url' : 'https://zingchart.github.io/zingtouch/',
		'desc' : 'Librería para detectar gestos en dispositivos táctiles sin tener que montar un circo.'
	},

	'J S&ensp;H I S T O R Y  P U S H S T A T E' : {
		'url' : 'https://www.sitepoint.com/javascript-history-pushstate/',
		'desc' : 'Cómo funciona esta cosa.'
	},

	'C O O K I E S . J S' : {
		'url' : 'https://github.com/ScottHamper/Cookies',
		'desc' : 'Librería para lidiar con las cookies de forma más sencilla.'
	},

	'J S H I N T' : {
		'url' : 'https://jshint.com/',
		'desc' : 'Para lintear el código.'
	},

	'M O D E R N I Z R' : {
		'url' : 'https://modernizr.com/docs',
		'desc' : 'Para comprobar qué cosas puede hacer el navegador.'
	},

	'C A N&ensp;I&ensp;U S E ?' : {
		'url' : 'https://caniuse.com/',
		'desc' : 'Para comprobar qué cosas puede hacer el navegador.'
	},

	'J E S T' : {
		'url' : 'https://jestjs.io/',
		'desc' : 'Para testear.'
	},

	'T H E&ensp;P R O M I S E&ensp;O F&ensp;A&ensp;B U R G E R&ensp;P A R T Y' : {
		'url' : 'https://web.archive.org/web/20170202045534/http://kosamari.com/notes/the-promise-of-a-burger-party',
		'desc' : 'Para trastear con código HTML/JS/CSS.'
	},

	'3 0&ensp;J A V A S C R I P T&ensp;P R O J E C T S' : {
		'url' : 'https://github.com/Brymmobaggins/30JavaScriptProjects',
		'desc' : '30 proyectitos usando JS vanilla.'
	},
};

const apisdb = {

	'O P E N&ensp;M E T E O' : {
		'url' : 'https://open-meteo.com/en/docs',
		'desc' : 'API gratuita de meteorología.'
	},

	'T H E&ensp;C O C K T A I L&ensp;D B' : {
		'url' : 'https://www.thecocktaildb.com/',
		'desc' : 'API gratuita de cócteles.'
	},

	'T H E&ensp;M E A L&ensp;D B' : {
		'url' : 'https://www.themealdb.com/',
		'desc' : 'API gratuita de recetas.'
	},

	'T H E&ensp;A U D I O&ensp;D B' : {
		'url' : 'https://www.theaudiodb.com/',
		'desc' : 'API gratuita de audios.'
	},

	'F E T C H&ensp;&&ensp;D I S P L A Y&ensp;[ T U T O R I A L ]' : {
		'url' : 'https://w3collective.com/fetch-display-api-data-javascript/',
		'desc' : 'Cómo hacer fetch & display con una API.'
	},

	'P U B L I C&ensp;A P I S&ensp;G I T H U B' : {
		'url' : 'https://github.com/public-apis/public-apis',
		'desc' : 'Listado de APIs gratuitas.'
	},

	'A R T&ensp;I N S T I T U T E&ensp;O F&ensp;C H I C A G O&ensp;A P I' : {
		'url' : 'https://api.artic.edu/docs/#introduction',
		'desc' : 'API del Art Institute de Chicago.'
	},

	'E U R O P E A N A&ensp;A P I' : {
		'url' : 'https://pro.europeana.eu/page/apis',
		'desc' : 'API de arte de museos europeos.'
	},

	'B R I T I S H&ensp;L I B R A R Y&ensp;D A T A S E T S' : {
		'url' : 'https://www.bl.uk/collection-metadata/downloads',
		'desc' : 'Colecciones de datos de bibliografías seleccionadas de la biblioteca.'
	},

	'I I I F&ensp;( I N T E R N A T I O N A L&ensp;I M A G E<br>I N T E R O P E R A B I L T Y&ensp;F R A M E W O R K )' : {
		'url' : 'https://iiif.io/api/image/2.0/',
		'desc' : 'Estándar para APIs que utilicen imágenes.'
	},

	'M E D I A&ensp;W I K I' : {
		'url' : 'https://www.mediawiki.org/wiki/API:Main_page',
		'desc' : 'API de Wikipedia.'
	},

	'C U R L' : {
		'url' : 'https://reqbin.com/curl',
		'desc' : 'Genera código para acceder a web REST APIs.'
	},

	'L A S T . F M&ensp;A P I' : {
		'url' : 'https://www.last.fm/api/intro',
		'desc' : 'API de Last.fm (hace falta registrarse para utilizarla).'
	},
};
