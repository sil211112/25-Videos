//Objetos

//Object Literal
const persona = {
 nombre: 'Juan',
 profesion: 'Desarrollador Web',
 edad: 500,
}
// console.log(persona);
//    const mostrarCliente = mostraInformacionTarea(persona.tarea, persona.profesion);
//    console.log(mostrarCliente);

//Object Constructor
function Tarea(nombre, urgencia) {
 this.nombre = nombre
 this.urgencia = urgencia
}
//Agregar un prototype a tarea:
Tarea.prototype.mostrarInformacionTarea = function () {
 return `La tarea ${this.tarea} tiene una prioridad de ${this.urgencia}`
}

// crear una nueva tarea:
const tarea1 = new Tarea('Aprender JavaScript y React', 'Urgente')
const tarea2 = new Tarea('Pasear al perro', 'Media')
console.log(tarea1)
console.log(tarea1.mostrarInformacionTarea())
console.log(tarea2)
console.log(tarea2.mostrarInformacionTarea())
