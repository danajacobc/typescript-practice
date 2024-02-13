
export class Person {
    //! Esto a continuación es normal verlo en Angular, pero no en typescript (línea 4 y 5)
    // public name: string;
    // public address: string;

    constructor( 
        public name: string, 
        public address: string = 'No address') {}
}

const ironman = new Person('Ironman', 'New York');

console.log(ironman);
