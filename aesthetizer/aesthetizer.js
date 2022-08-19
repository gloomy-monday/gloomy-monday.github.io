'use strict';

const chosenVibes = [];
var chosenPalette = "";
var aestheticName = "";
const imgSrc = [];

function letsGo() {
	if (chosenVibes.length == 0) {
		document.getElementById('message').innerHTML = 'choose some vibes first, my sibling in christ.'
	}
	 else if (chosenVibes.length !=0 && chosenVibes.length < 3) {
		document.getElementById('message').innerHTML = 'choose <u>three</u> vibes, if it\'s not too much to ask for.'
	} else if (chosenVibes.length == 3 && chosenPalette != "" && myform.inputbox.value != "") {
		document.getElementById('message').innerHTML = '';
		aestheticName = myform.inputbox.value;
		clearBoard();
		chooseSources();
	} else if (chosenVibes.length > 3) {
		document.getElementById('message').innerHTML = 'just three, don\'t get greedy.'
	};}


function clearBoard() {
	imgSrc.length = 0;
	return imgSrc;
	};

function chooseSources() {
	let firstVibe = [];
	let secondVibe = [];
	let thirdVibe = [];
	let paletteObject = vibes[chosenPalette];
	firstVibe.push(paletteObject[chosenVibes[0]]);
	secondVibe.push(paletteObject[chosenVibes[1]]);
	thirdVibe.push(paletteObject[chosenVibes[2]])
	shuffleAndPush(firstVibe,0);
	shuffleAndPush(secondVibe,1);
	shuffleAndPush(thirdVibe,2);
	fillBoard();
}

function fillBoard() {
	let firstText = randomize(vibeText[chosenVibes[0]]);
	let secondText = randomize(vibeText[chosenVibes[1]]);
	let thirdText = randomize(vibeText[chosenVibes[2]]);
	document.getElementById('vibetext').innerHTML = `${firstText},<br> ${secondText}<br>& ${thirdText}`;
	justShuffle(imgSrc);
	for (let i = 1, max = 9; i <= max; i++){
		let id = 'img' + i;
		let source = imgSrc[i-1];
		document.getElementById(id).innerHTML = `<img src=${source}>`;
	};
	document.getElementById('aestheticname').innerHTML = `${aestheticName}core`
	document.getElementById('board').style.display = 'block';
	document.getElementById('options').style.display = 'none';
	let firstButtonId = 'b-' + chosenVibes[0];
	let secondButtonId = 'b-' + chosenVibes[1];
	let thirdButtonId = 'b-' + chosenVibes[2];
	let paletteButtonId = 'b-' + chosenPalette;
	document.getElementById(firstButtonId).style.opacity = 0.6;
	document.getElementById(secondButtonId).style.opacity = 0.6;
	document.getElementById(thirdButtonId).style.opacity = 0.6;
	document.getElementById(paletteButtonId).style.opacity = 0.6;
	chosenVibes.length = 0;
	chosenPalette = "";
	myform.inputbox.value = "";
	aestheticName = "";
	console.log(`look what I did with the vibes ${chosenVibes} and the palette ${chosenPalette}`);};

function selectVibe(vibeButton) {
	let button = document.getElementById(vibeButton);
	let computedStyle = getComputedStyle(button);
	if (computedStyle.opacity == 0.6) {
		button.style.opacity = 1;
		chosenVibes.push(button.innerHTML);
}
	else {
		button.style.opacity = 0.6;
		chosenVibes.pop(button.innerHTML);
	};
	console.log(`The vibes are ${chosenVibes}`)
};

function selectPalette(paletteButton) {
	let button = document.getElementById(paletteButton);
	let computedStyle = getComputedStyle(button);
	if (computedStyle.opacity == 0.6) {
		document.getElementById("b-pastel").style.opacity = 0.6;
		document.getElementById("b-vivid").style.opacity = 0.6;
		document.getElementById("b-dark").style.opacity = 0.6;
		document.getElementById("b-bw").style.opacity = 0.6;
		button.style.opacity = 1;
		chosenPalette = button.innerHTML;
	} else {
		button.style.opacity = 0.6;
		chosenPalette = "";
	};
	console.log(`The palette is ${chosenPalette}`)
};

function shuffleAndPush(array,index) {
		let currentIndex = array.length, randomIndex;
		while (currentIndex !=0) {
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex --;
			[array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
		}
		let cutDown = array.slice(0,3);
		let newArray = cutDown[0];
		console.log("cut down type")
		console.log(typeof cutDown);
		let currentVibe = chosenVibes[index];
		let firstFile = newArray[0];
		console.log("here's the first file");
		console.log(firstFile);
		let secondFile = newArray[1];
		console.log("here's the second file");
		console.log(secondFile);
		let thirdFile = newArray[2];
		console.log("here's the third file");
		console.log(secondFile);
		imgSrc.push(`vibes/${chosenPalette}/${currentVibe}/${firstFile}`);
		imgSrc.push(`vibes/${chosenPalette}/${currentVibe}/${secondFile}`);
		imgSrc.push(`vibes/${chosenPalette}/${currentVibe}/${thirdFile}`);
		console.log("check this out:")
		console.log(imgSrc);
		return cutDown;
}

function justShuffle(array) {
		let currentIndex = array.length, randomIndex;
		while (currentIndex !=0) {
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex --;
			[array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
		};
		return array
}

function randomize(array) {
	let index = Math.floor( Math.random() * array.length );
	return array[index];
}

function back() {
	document.getElementById('board').style.display = 'none';
	document.getElementById('options').style.display = 'block';
}
