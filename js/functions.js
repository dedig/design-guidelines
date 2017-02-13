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

// Recursividade -----------------------------------------------------------------------//

window.onload = function() {
	for (i in colors) {
		colors[i].resize();
	}
	for (i in fundos) {
		fundos[i].show();
	}
}

window.onresize = function() {
	for (i in colors) {
		colors[i].resize();
	}
	for (i in fundos) {
		fundos[i].show();
	}
}