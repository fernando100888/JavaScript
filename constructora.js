//esta es una función constructora. Para generar un template de un objeto para varias instancias
function auto (MARCA, MODELO, ANNIO) {
    this.marca = MARCA;    //this hace referencia a la función constructora
    this.modelo = MODELO;
    this.annio = ANNIO;
}

var autoNuevo = new auto ("Tesla", "Model 3", 2021); //new es un operador que genera un objeto que deriva de otro objeto (instancia)

var autoNuevo2 = new auto ("Tesla","Model X", 2018);

var autoNuevo3 = new auto ("Toyota","Corola", 2020);
//---------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------
//segundo método usando loop
function carro (MARCA2, MODELO2, ANNIO2){
    this.marca2 = MARCA2;
    this.modelo2 = MODELO2;
    this.annio2 = ANNIO2;
  }
  var carros = [];
  for(let i = 0 ; i < 30 ; i++){
    var marca2 = prompt("Ingresa la marca del carro");
    var modelo2 = prompt("Ingresa el modelo del carro");
    var annio2 = prompt("Ingresa el año del carro");
    carros.push(new carro (marca2, modelo2, annio2));
  }
  
  for(let i = 0 ; i < carros.length ; i++){
    console.log(carros[i]);
  }