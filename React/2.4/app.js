//Scope

// var musica = 'Rock'

// if (musica) {
//     var musica = 'Grunge'
//     console.log('dentro del if: ', musica)
// }
// console.log('Fuera del IF', musica);

//Scope con let

const musica = 'Rock'

if (musica) {
 const musica = 'Grunge'
 console.log('dentro del if: ', musica)
}
console.log('Fuera del IF', musica)
