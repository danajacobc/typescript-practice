
export interface Passenger {
    name: string;
    children?: string[];
}

const passenger1: Passenger = {
    name: 'Dana',
}

const passenger2: Passenger = {
    name: 'Fernando',
    children: ['Natalia', 'Elizabeth']
}

const printChildren = ( passenger: Passenger ) => {

    const howManyChildren = passenger.children?.length || 0;

    console.log(passenger.name, ' tiene ', howManyChildren, ' hijos!');
    
}

printChildren(passenger1)


// const returnChildrenNumber = ( passenger: Passenger ): number => {
    
//     if ( !passenger.children ) return 0;

//     const howManyChildren = passenger.children!.length; //! - ! -> no null assessment operator se llama -

//     console.log(passenger.name, ' tiene ', howManyChildren, ' hijos!'); //si es 0 no se ejecuta el console log.

//     return howManyChildren;
    
// }

// returnChildrenNumber(passenger1)
