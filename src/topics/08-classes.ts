
export class Person {
    //! Esto a continuación es normal verlo en Angular, pero no en typescript (línea 4 y 5)
    // public name: string;
    // public address: string;

    constructor( 
        public firstName: string,
        public lastName: string,
        public address: string = 'No address') {}
}

// export class Hero extends Person {

//     constructor(
//         public alterEgo: string,
//         public age: number,
//         public realName: string,
//     ) {
//         super(realName, 'New York');

//     }
// }

export class Hero {

   // public person: Person;

    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string,
        public person: Person,
    ) {
        //this.person = new Person(realName);
    }

}

const tony = new Person('Tony', 'Stark', 'New York');

const ironman = new Hero('Ironman', 45, 'Tony', tony);

console.log(ironman);
