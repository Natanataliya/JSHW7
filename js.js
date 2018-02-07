// task 1

var outInp = '';
var inputs = document.getElementById('inputs');
var inpCount = 0;

document.getElementById('plus').onclick = () => {
	inpCount++;
	addInp();
}

document.getElementById('Join').onclick = () => {
	isEmpty();
	var inpJoined = toJoin();

	document.getElementById('inpArea').innerHTML = inpJoined;
}

function addInp () {
	outInp = '';

	for (var i = 0; i < inpCount; i++){
		console.log(2)
		outInp += '<p><input type="text" class="inputs"><input type="button" value="-" class="minus"><span class="errField"></span></p>';
	}

	inputs.innerHTML = outInp;
	setOnClick();
}

function setOnClick () {
	
	var minBtn = document.getElementsByClassName('minus');

	for(var i = 0; i < minBtn.length; i++){
		minBtn[i].onclick = function () {
			inpCount--;
			addInp();
		}
	}
}

// task 2

function toJoin () {
	inpJoined = '';
	var inpmas = document.getElementsByClassName('inputs');
	var radio = document.getElementsByName('choose');

	if (radio[0].checked) {
		for (var i = 1; i < inpmas.length; i+=2) {
			inpJoined += inpmas[i].value;
		}
	}
	else if (radio[1].checked){
		for (var i = 0; i < inpmas.length; i+=2) {
			inpJoined += inpmas[i].value;
		}
	}
	else if (radio[2].checked){
		for (var i = 0; i < inpmas.length; i++) {
			inpJoined += inpmas[i].value;
		}
	}
	return inpJoined;
}

// task3

function isEmpty () {
	var inpmas = document.getElementsByClassName('inputs');
	var err = document.getElementsByClassName('errField');

	for (var i = 0; i < inpmas.length; i++){
		if (!inpmas[i].value){
			inpmas[i].style.boxShadow = 'inset 0 0 10px 0 red';
			err[i].innerHTML = 'fill the field';
		}
		else {
			inpmas[i].style.boxShadow = 'none';
			err[i].innerHTML = '';
		}
	}
}


// task 4

var a = document.getElementById('win');

document.getElementById('Window').onclick = function (e) {
	
	win.style.display = 'block';
	win.style.left = e.pageX + 'px';
	win.style.top = e.pageY + 'px';

}

document.getElementById('btn1').onclick = btnClick;
document.getElementById('btn2').onclick = btnClick;

function btnClick() {
	win.style.display = 'none';
	alert('You chose ' + this.value);
}


// task 5

var listItem = document.getElementsByClassName('c');

for (var i = 0; i < listItem.length; i++){
	listItem[i].onclick = function () {
		if (this.style.background == 'red') {
			this.style.background = 'white';
		}
		else {
			this.style.background = 'red';
		}
	}
}



// task 6

var imgblock = document.querySelector('.imgBlock');
var maintext = document.querySelector('.mainText');

maintext.onmouseenter = function () {
	imgblock.style.left = '-326px';
}

maintext.onmouseleave = function () {
	setTimeout(function () {
		imgblock.style.left = '0px';
	}, 1000);
}



// task 7-8

var links = document.querySelectorAll('a');
var picks = document.querySelectorAll('img');
var massage = document.querySelector('.address');

for (var i = 0; i < links.length; i++){
	links[i].onmouseenter = function () {
		this.style.display = 'inline-block';
		var a = this.href || ' <span class="bug">no href</span> ';
		var b = this.title || ' <span class="bug">no title</span> ';
		var c = this.target || ' <span class="bug">no error</span> ';
		massage.innerHTML = a + ' ' + b + ' ' + c;
		massage.style.bottom = '0px';
	}
	links[i].onmouseleave = function () {
		massage.style.bottom = '-20px';
	}
}

for (var i = 0; i < picks.length; i++){
	picks[i].onmouseenter = function () {
		if (!this.alt) {
			this.style.display = 'inline-block';
			this.style.boxShadow = '0 0 30px 10px red';
		}
		var a = this.src || ' <span class="bug">no src</span> ';
		var b = this.alt || ' <span class="bug">no alt</span> ';
		massage.innerHTML = a + ' ' + b;
		massage.style.bottom = '0px';
	}
	picks[i].onmouseleave = function () {
		this.style.boxShadow = 'none';
		massage.style.bottom = '-20px';
	}
}

// task 9-10
var a = document.querySelector('.hPar');

document.querySelector('.cal').onclick = function () {
	var h = [];

	for (var i = 0; i < 6; i++ ) {
		var selector = 'h' + (i+1);
		h[i] = document.getElementsByTagName(selector);
	}

	for (var i = 0; i < h.length; i++){
		console.log(h[i])
		if(!h[i].length) a.innerHTML += `no h ${i+1}-tags on page <br>`;
	}
	checkMeta();
}

function checkMeta(){
	var tit = document.title;
	var met = document.getElementsByTagName('meta');

	if(!tit.length) p.innerHTML += 'no title on page <br>';

	for (var i = 0; i < met.length; i++){
		if(met[i].name != 'description' && !met[i].content) {
			a.innerHTML += 'no meta-description <br>';
		}

		if(met[i].name != 'keywords' && !met[i].content) {
			a.innerHTML += 'no meta-keywords <br>';
		}
	}
}












