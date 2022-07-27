if (true) {
    console.log ("hola")
}


//----------------------------------------------------------------------


if (false) {
    console.log ("hola")
} else {
    console.log ("soy falso")
}


//----------------------------------------------------------------------


var edad = 18;
if (edad === 18) {
    console.log ("oye!, felicidades, ya podés votar!")
} else if (edad > 18) {
    console.log ("no te olvidés que tenés que ir a votar")
} else {
    console.log ("todavía no podés votar")
}



//----------------------------------------------------------------------



condition ? true : false; //esto es un operador terniario


//ejemplo:
var numero = 1;
var resultado = numero === 1 ? "soy el número uno" : "no soy el número 1";
console.log (resultado);

// NOTA: si cambio el valor de la variable número tendré que resultado = "no soy el número 1"
