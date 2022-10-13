"use strict";

let wrappers = document.getElementsByClassName("project-wrapper");
let closeBs = document.getElementsByClassName("closeB");
let projectImgsArray = document.getElementsByClassName("project-img");
let currentProject = [];
let currentSrcs = [];



//Abrir proyecto
for (let i = 0; i < wrappers.length; i++) {
	let wrapper = wrappers[i];
	wrapper.addEventListener('click', () => {
		wrapper.classList.add("open-wrapper");
		wrapper.classList.add("appear");
	})
}

//Cerrar proyecto
for (let i = 0; i < closeBs.length; i++) {
	let closeB = closeBs[i];
	closeB.addEventListener('click', () => {
		event.stopPropagation();
		let project = closeB.parentNode.parentNode;
		project.classList.remove("open-wrapper");
		project.classList.remove("appear");
	})
}

//Ver fotos en grande
for (let i = 0; i < projectImgsArray.length; i++) {
	let projectImgs = projectImgsArray[i];
	projectImgs.addEventListener('click', () => {
		let classList = projectImgs.parentNode.classList;
		currentProject = projectImgs.children;
		for (let i = 0; i < currentProject.length; i++) {
			let source = currentProject[i].src;
			currentSrcs.push(source);
		};
		if (classList.contains("open-wrapper") && event.target.src != undefined) {
			let clickedImg = event.target.src;
			document.getElementById("viewer-image").innerHTML = clickedImg;
			console.log(document.getElementById("viewer-image").src = clickedImg);
			document.getElementById("image-viewer").classList.remove("disabled");
		}})
}

//Botones visor de imágenes
document.getElementById("roundB").addEventListener('click', () => {
	document.getElementById("image-viewer").classList.add("disabled");
	currentProject = [];
	currentSrcs = [];
})

document.getElementById("prevB").addEventListener('click', () => {
	let currentImg = document.getElementById("viewer-image").src;
	let currentIndex = currentSrcs.indexOf(currentImg);
	if (currentIndex != 0) {
		document.getElementById("viewer-image").src = currentSrcs[currentIndex - 1]
	}
})

document.getElementById("nextB").addEventListener('click', () => {
	let currentImg = document.getElementById("viewer-image").src;
	let currentIndex = currentSrcs.indexOf(currentImg);
	if (currentIndex != (currentSrcs.length - 1)) {
		document.getElementById("viewer-image").src = currentSrcs[currentIndex + 1]
	}
})


//Year (Footer)

const date = new Date;
const year = date.getFullYear();
document.getElementById("year").innerHTML = year;
