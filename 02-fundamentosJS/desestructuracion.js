
const deadpool = {
    nombre: 'Wade',
    apellido:'Winston',
    poder:'Regeneracion',
    getNombre: function( ) {
        return `${this.nombre} ${this.apellido} ${this.poder}`
    }
}

console.log( deadpool.getNombre());


function imprimeHeroe( heroe ) {
    const { nombre, apellido, poder, edad = 0 } = heroe;
    console.log( nombre, apellido, poder, edad );

}

imprimeHeroe();


// //extrar varias propiedades de un objeto 
// const { nombre, apellido, poder, edad = 0 } = deadpool;

// console.log( nombre, apellido, poder, edad );
