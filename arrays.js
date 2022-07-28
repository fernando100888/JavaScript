var frutas = ["manzanas", "peras", "mandarinas", "sandías", "uvas", "naranjas"];

console.log (frutas);//muestra la lista

console.log (frutas.length);//cantidad de elementos en la lista

console.log (frutas [0]);//muestra el primer elemento de la lista



//-----------------------------------------------------------


//métodos para modificar una array:

var masFrutas = frutas.push ("duraznos"); //añade o empuja el elemento duraznos al final del array

var ultimo = frutas.pop ("duraznos"); //elimina un elemento elegido del array

var nuevaLongitud = frutas.unshift ("papayas"); //añade un elemento al inicio del array

var borrarfruta = frutas.shift ("papayas"); //elimina el primer elemento del array

var posicion = frutas.indexOf ("mandarinas"); //me indica la posición de un elemento del array en específico