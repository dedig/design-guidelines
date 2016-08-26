// Gerando quick buttons das sessões -----------------------------------------------------------------------//

function quickBtns(parent) {
	this.parent = parent;
	this.articles = this.parent.querySelectorAll('.article__subtitle');
	this.labels = this.parent.querySelectorAll('.article__subtitle--txt');
	this.buttonContainer = this.parent.querySelectorAll('.quick-buttons');
	//this.articleSubContents = this.parent.querySelectorAll('.article__subcontent');
	this.buttons = "";

	for (var i = 0; i < this.labels.length; i++) {
		var t = this.labels[i].outerText;
		//var rect = this.articles[i].getBoundingClientRect();
		//this.buttons += "<button class='quick-buttons__button' onclick='scrollTo(0," + rect.top + ")'>" + t + "</button>";
		this.buttons += "<a href='#" + this.articles[i].id + "'><button class='quick-buttons__button'>" + t + "</button></a>";
		// onclick='scrollTo(0," + String(window.pageYOffset - 200) + ");'
	}

	this.buttonContainer[0].innerHTML = this.buttons;
}

var sessoes = [];
var articles = document.querySelectorAll('.article');

for (var i = 0; i < articles.length; i++)
	sessoes.push(new quickBtns(articles[i]));

// Mostrar ou esconder -----------------------------------------------------------------------//

function articleSubcontent(id) {
	this.id = id;
	this.idArrow = id + "__arrow";
	this.display = "block";
	document.getElementById(this.id).style.display = this.display;
	document.getElementById(this.idArrow).style.backgroundPosition = "0 0";
}

articleSubcontent.prototype = {
	showhide : function() {
		if (this.display == "block") {
			document.getElementById(this.idArrow).style.backgroundPosition = "-18px 0";
			this.display = "none";
			document.getElementById(this.id).style.display = this.display;
		}
		else {
			document.getElementById(this.idArrow).style.backgroundPosition = "0 0";
			this.display = "block";
			document.getElementById(this.id).style.display = this.display;
			for (i in colors) {
				colors[i].resize();
			}
			for (i in fundos) {
				fundos[i].show();
			}
		}
	}
}

var abas = [];
var as = document.querySelectorAll('.article__subcontent');

for (var i = 0; i < as.length; i++) {
	abas.push(new articleSubcontent(as[i].id));
}

function showhide(id) {
	for (var i = 0; i < abas.length; i++) {
		if (id == abas[i].id) {
			abas[i].showhide();
		}
	}
}

// One page navigation -----------------------------------------------------------------------//

function activePage () {
	var sessoes = document.querySelectorAll(".article");
	var itens = document.querySelectorAll(".header__menu__item");
	var range = [];

	for (var i = 0; i < sessoes.length; i++) {
		range.push(sessoes[i].offsetTop);
	}
	
	for (i in range) {
		itens[i].style.opacity = "1.0";
		itens[i].removeAttribute("style");

		if (window.pageYOffset >= (range[i] - 150) && window.pageYOffset < (range[Number(i) + 1] - 150)) {
			itens[i].style.color = '#f6a623';
			itens[i].style.textShadow = "0 0 5px #f6a623";
			sessoes[i].style.opacity = "1.0";
		}
		else if (window.pageYOffset <= (range[i] - 300))
			sessoes[i].style.opacity = "0.15";
		else if (window.pageYOffset <= (range[i] - 275))
			sessoes[i].style.opacity = "0.25";
		else if (window.pageYOffset <= (range[i] - 250))
			sessoes[i].style.opacity = "0.35";
		else if (window.pageYOffset <= (range[i] - 200))	
			sessoes[i].style.opacity = "0.45";
		else
			sessoes[i].style.opacity = "1.0";
	}
}

// Cores -----------------------------------------------------------------------//

var colors = [];

color = function (name, hex, rgb, cmyk) {
	this.name = name;
	this.hex = hex;
	this.rgb = rgb;
	this.cmyk = cmyk;
	this.els = document.querySelectorAll("." + this.name);
	window.colors.push(this);

	this.tint = function() {
		var sample = "<div class='colors_sample col-xs-2' style='background-color:" +
		hex + ";display:block;'></div>";
		
		var txt = "<p class='colors__txt col-xs-10'>" + hex + "<br/>RGB: " +
		rgb[0] + ", " + rgb[1] + ", " + rgb[2] + "<br/>CMYK: "+ cmyk[0] + ", " +
		cmyk[1] + ", " + cmyk[2] + ", " + cmyk[3] + "</p>";
		
		for (var i = 0; i < this.els.length; i++) {
			this.els[i].innerHTML = sample + txt;
		}
	}

	this.resize = function() {
		for (var i = 0; i < this.els.length; i++) {
			var square = this.els[i].childNodes[1].clientHeight;
			this.els[i].childNodes[0].style.height = square + "px";
			this.els[i].childNodes[0].style.width = square + "px";
		}
	}

	this.tint();
}

lightblue = new color("lightblue", "#2ba7e7", [43,167,231], [90,10,0,0]);
blue = new color("blue", "#266ab8", [38,106,184], [95,60,0,0]);
darkblue = new color("darkblue", "#1c4d83", [28,77,131], [100,80,30,0]);
lightorange = new color("lightorange", "#f6a623", [246,166,35], [0,40,90,0]);
orange = new color("orange", "#ed851c", [237,133,28], [0,55,100,0]);
darkorange = new color("darkorange", "#e56618", [229,102,24], [0,70,100,0]);
red = new color("red", "#a51419", [165,20,25], [20,100,100,0]);
purple = new color("purple", "#874691", [135, 70, 145], [50,90,0,0]);
lightpink = new color("lightpink", "#f6b0ca", [246,176,202], [0,50,10,0]);
pink = new color("pink", "#ea4a8b", [234,74,139], [0,85,10,0]);
green = new color("green", "#4b9832", [75,152,50], [90,15,100,0]);
darkgreen = new color("darkgreen", "#15390d", [21,57,13], [95,65,100,50]);
yellow = new color("yellow", "#f0cd00", [240,205,0], [0,20,100,0]);
lightyellow = new color("lightyellow", "#ffc", [255,255,204] ,[0,0,30,0]);
white = new color("white", "#fff", [255,255,255], [0,0,0,0]);
lightgrey = new color("lightgrey", "#c0c0c0", [192,192,192], [0,0,0,30]);
grey = new color("grey", "#727272", [114,114,114], [0,0,0,70]);
darkgrey = new color("darkgrey", "#434343", [67,67,67], [0,0,0,90]);
black = new color("black", "#000", [0,0,0], [0,0,0,100]);

// Fundos do logo -----------------------------------------------------------------------//

var fundosCorretos = document.getElementById('logo--fundos--corretos').querySelectorAll('.logo--fundos__bloco');
var fundosIncorretos = document.getElementById('logo--fundos--incorretos').querySelectorAll('.logo--fundos__bloco');
var fundos = [];

function fundoLogo(element, isCorrect) {
	this.bloco = element;
	this.logo = "<img src='img/dedig-logo_rgb_byline.png' class='logo--fundos__bloco--logo'>";
	if (isCorrect)
		this.overlay = "<img src='img/certo.png' class='logo--fundos__bloco--overlay'>";
	else
		this.overlay = "<img src='img/errado.png' class='logo--fundos__bloco--overlay'>";
	this.bloco.innerHTML = this.logo + this.overlay;
}

fundoLogo.prototype = {
	show : function() {
		this.bloco.style.height = this.bloco.clientWidth + "px";
	}
}

for (var i = 0; i < fundosCorretos.length; i++) {
	fundos.push(new fundoLogo(fundosCorretos[i], true));
}

for (var i = 0; i < fundosIncorretos.length; i++) {
	fundos.push(new fundoLogo(fundosIncorretos[i], false));
}

// Recursividade -----------------------------------------------------------------------//

window.onload = function() {
	activePage();
	for (i in colors) {
		colors[i].resize();
	}
	for (i in fundos) {
		fundos[i].show();
	}
}

window.onresize = function() {
	activePage();
	for (i in colors) {
		colors[i].resize();
	}
	for (i in fundos) {
		fundos[i].show();
	}
}

window.onscroll = function() {
	activePage();
}