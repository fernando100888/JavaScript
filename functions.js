// 2 types of functions

// declaration

function miFuncion() {
    return 3;
}

miFuncion();


// statement

var miFunction = function (a,b) {
    return a + b;
}

miFunction();


//---------------------------

function saludar(nombre) {
	console.log(`Hola ${nombre}`);
}

saludar('Fernando');


//---------------------------

var nombre = function(nombre){
    console.log(`Hola ${nombre}`)
}

nombre(Fernando);