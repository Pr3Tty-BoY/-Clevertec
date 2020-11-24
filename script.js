//СЛАЙДЕР
let slides = document.querySelectorAll('.slide-single');
console.log(slides);
let slider = [];
let btn = document.querySelector('#btn');

for (let i = 0; i < slides.length; i++) {
	slider[i] = slides[i].src;
	slides[i].remove();
}
console.log(slider);
let step = 0;
let offset = 0;


/*function draw() {
	let img = document.createElement('img');
	img.src = slide
	//img.style.backgroundImage = "url('"+slider[step]+"') 100% 100% no-repeat;";
	//img.style.backgroundSize = 'cover';
	//img.style.backgroundPosition = 'center';
	
	img.classList.add('slide-single');
	img.style.left = offset * 100 + '%';
	document.querySelector('#slide').appendChild(img);
		if (step + 1 == slider.length) {
		step = 0;
	} else {
		step++;
	}
	offset = 1;
}*/

function draw() {
	let img = document.createElement('img');
	img.src = slider[step];
	console.log(step);
	img.classList.add('slide-single');
	img.style.left = offset * 100 + '%';
	document.querySelector('#slide').appendChild(img);
	if (step + 1 == slider.length) {
		step = 0;
	} else {
		step++;
	}
	offset = 1;
}
//ГДЕ_ТО ошибка в вычислениях
function swipe() {
	document.onclick = null;
	let slides2 = document.querySelectorAll('.slide-single');
	let offset2 = 0;
	for (let i = 0; i < slides2.length; i++) {
		slides2[i].style.left = offset2 * 100 - 100 + '%';
		offset2++;
	}
	setTimeout(function () {
		slides2[0].remove();
		draw();
		btn.onclick = swipe;
	}, 1000);
}
draw();
draw();
btn.onclick = swipe;
