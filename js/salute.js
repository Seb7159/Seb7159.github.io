var hello = [
		"Hi there",
		"Hey",
		"Welcome",
		"Good day to you"
	],
	namen = [
		"I am",
		"The name is",
		"Call me"
	],
	contact = [
		"Contact me.",
		"Email me.",
		"Send me an e-mail.",
		"Fill my inbox!"
	];

	// In case the user's country is different than an English-speaking one 
$.get("https://ipinfo.io", function (response) {
	var ctry = response.country;
	// Default is GB - English language salute 
	if( ctry == "ES" ){
		hello[0] = "¡Hola!";
		hello[1] = "¡Bienvenida!";
		hello[2] = "¿Que tal?";
		hello[3] = "¡Saludos!";
	}
	else if( ctry == "RO" ){
		hello[0] = "Bun venit!";
		hello[1] = "Buna ziua!";
		hello[2] = "Va salut!";
		hello[3] = "Salutare!";
	}
	else if( ctry == "FR" ){
		hello[0] = "Bonjour!";
		hello[1] = "Tiens!";
		hello[2] = "Bienvenue!"; 
		hello[3] = "Salut!";
	}
	else if( ctry == "IT" ){
		hello[0] = "Ciao!";
		hello[1] = "Benvenuto!";
		hello[2] = "Piacere di conoscerti!";
		hello[3] = "Salve!";
	}
	else if( ctry == "DE" ){
		hello[0] = "Guten Tag!";
		hello[1] = "Wie geht es dir?";
		hello[2] = "Servus!";
		hello[3] = "Hallo!";
	}

	document.getElementById("title").innerHTML   =  hello[ rnd( 0, hello.length-1) ];
}, "jsonp");


document.getElementById("title").innerHTML   =  hello[ rnd( 0, hello.length-1) ];
document.getElementById("name").innerHTML    =  namen[ rnd( 0, namen.length-1) ] + " Seb.";
document.getElementById("contact").innerHTML = "<a href='mailto:stanicisebastian@gmail.com'> " + contact[ rnd( 0, contact.length-1) ] + " </a>";


function rnd(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

