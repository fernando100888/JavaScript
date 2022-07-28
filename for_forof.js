//primer método:

var estudiantes = ["Chilindrina", "Chavo", "Kiko", "Ñoño", "Godínez"]

function saludarEstudiantes (estudiante){
    console.log (`Hola, ${estudiante}`);
}

for (var i = 0; i < estudiantes.length; i++){
    saludarEstudiantes (estudiantes[i]);
}
//-----------------------------------------------------------------
//-----------------------------------------------------------------
//-----------------------------------------------------------------
//-----------------------------------------------------------------
//-----------------------------------------------------------------
//-----------------------------------------------------------------
//segundo método:

var estudiantes = ["Chilindrina", "Chavo", "Kiko", "Ñoño", "Godínez"]

function saludarEstudiantes (estudiante){
    console.log (`Hola, ${estudiante}`);
}

for (estudiante of estudiantes) {
    saludarEstudiantes(estudiante);
}