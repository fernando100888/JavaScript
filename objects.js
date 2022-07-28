var miAuto = {
    marca : "Toyota", 
    modelo : "Corolla",
    anno : 2020
};

console.log (miAuto);//muestra los detalles del objeto miAuto

console.log (miAuto.marca)//muestra la marca del objeto miAuto

console.log (miAuto.anno)//muestra el año del objeto miAuto

 //añadiendo un método 
 var miAuto = {
    marca : "Toyota", 
    modelo : "Corolla",
    anno : 2020,
    detalleDelAuto: function(){
        console.log (`Auto ${this.modelo} ${this.anno}`)
    }
};

