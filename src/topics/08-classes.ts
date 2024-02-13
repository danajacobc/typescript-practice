
export class Person {
    //! Esto a continuación es normal verlo en Angular, pero no en typescript (línea 4 y 5)
    // public name: string;
    // public address: string;

    constructor( 
        public name: string, 
        public address: string = 'No address') {}
}

export class Hero extends Person {
    
    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string,
    ) {
        super(realName, 'New York');

    }
}

const ironman = new Hero('Ironman', 45, 'Tony');

console.log(ironman);
