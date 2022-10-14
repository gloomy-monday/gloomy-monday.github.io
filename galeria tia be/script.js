"use strict";

let wrappers = document.getElementsByClassName("project-wrapper");
let closeBs = document.getElementsByClassName("closeB");
let projectImgsArray = document.getElementsByClassName("project-img");
let currentProject = [];
let currentSrcs = [];


function addProyectListeners() {
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
})}

//Montador de proyectos y paginación

function projectBuilder(page) {
let allKeys = Object.keys(response);
let pagesNumber = Math.ceil(allKeys.length / 4);
let keys = allKeys.splice(4 * (page - 1), 4);
console.log(keys);
console.log(`number of pages ${pagesNumber}`);
for (let i = 0; i < 4; i++) {
	let name = response[keys[i]].projectName;
	let desc = response[keys[i]].projectDesc;
	let srcs = response[keys[i]].imgSrcs;
	document.getElementsByTagName("main")[0].innerHTML += `<div class="project-wrapper">
            <div class="project-img">
            </div>
            <h2>${name}</h2>
            <div class="open-options">
                <p>${desc}</p>
                <button class="closeB">x</button>
            </div>
        </div>`;
        if(srcs.length === 1) {
        	document.getElementsByClassName("project-img")[i].innerHTML += `<img style="width:40rem;max-width:none" src="${srcs[0]}">`
        } else {
        for (let h = 0; h < srcs.length; ++h) {
   		document.getElementsByClassName("project-img")[i].innerHTML += `<img src="${srcs[h]}">`;
   	}}
} addProyectListeners()}

projectBuilder(1);

//Year (Footer)

const date = new Date;
const year = date.getFullYear();
document.getElementById("year").innerHTML = year;
