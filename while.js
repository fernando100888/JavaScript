var estudiantes = ["Chilindrina", "Chavo", "Kiko", "Ñoño", "Godínez"]

function saludarEstudiantes (estudiante){
    console.log (`Hola, ${estudiante}`);
}

while(estudiantes.length > 0){
    console.log(estudiantes);
    var estudiante = estudiantes.shift();
    saludarEstudiantes(estudiante);
}