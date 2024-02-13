// Decoradores: Funciones especiales que se adjuntan a diferentes objetos. - no son más que funciones que pueden modificar el comportamiento de clases, propiedades, métodos. 

function classDecorator<T extends { new (...args:any[]): {}}>( constructor: T ) {
    return class extends constructor {
        newProperty = 'New Property';
        hello = 'override'
    }
}

@classDecorator
export class SuperClass {
    public myProperty: string = 'Abc123'

    print() {
        console.log('Hola Mundo');
    }
}

console.log( SuperClass ); //imprimo la definición de la clase, no una nueva instancia de ella.

const myClass = new SuperClass();
console.log( myClass );

