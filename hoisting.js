//hoisting con variables:

var miNombre = undefined;

console.log(miNombre + "soy ese hoisting");

var miNombre = "Fernando";



//hoisting con funciones:

hey();

function hey(){
    console.log("Hola " + miNombre2);
}

var miNombre2 = "Nando";


//tendremos valores de variables undefined porque no estamos declarando las variables antes de ejecutar funciones