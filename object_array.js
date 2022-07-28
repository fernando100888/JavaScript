var articulos = [
    {nombre: "Bici", costo: 3000},
    {nombre: "TV", costo: 3500},
    {nombre: "Libro", costo: 350},
    {nombre: "Celular", costo: 10000},
    {nombre: "Laptop", costo: 20000},
    {nombre: "Teclado", costo: 500},
    {nombre: "Audifonos", costo: 1700},
];



//aplicando el método flitro
var articulosFiltrados = articulos.filter (function(articulo){
    return articulo.costo <= 500
});



//aplicando el método map para mapear (no modifica el array)
var nombreDeArticulos = articulos.map (function(articulo){
    return articulo.nombre
});
    


//aplicando el método find para encontrar algo dentro del array
var encontrandoArticulo = articulos.find (function(articulo){
    return articulo.nombre === "Laptop"
});




// aplicando el método foreEach. Esto no genera un nuevo array por lo que no es necesario generar una nueva variable
articulos.forEach(function(articulo){
    console.log (articulo.nombre);
});



//aplicando el método some. Esto es una validación de verdadero o falso, por lo que regresa un valor booleano (true or false)
var articulosBaratos = articulos.some(function(articulo){
    return articulos.costo <= 700;
});