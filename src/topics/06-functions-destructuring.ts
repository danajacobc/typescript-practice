
interface Product {
    description: string;
    price: number;
}

const phone: Product = {
    description: "Smartphone",
    price: 150
}

const tablet: Product = {
    description: "The best tablet",
    price: 300
}

interface TaxCalculationOptions {
    tax: number,
    products: Product[];
}

//! Opciión 1
// function taxCalculation( {tax, products}: TaxCalculationOptions ): [number, number] {
//     let total = 0;

//     products.forEach( ({price}) => {
//         total += price;
//     });

//     return [total, total * tax];
// }
function taxCalculation( options: TaxCalculationOptions ): [number, number] {
    const {tax, products} = options;
    let total = 0;

    products.forEach( ({price}) => {
        total += price;
    });

    return [total, total * tax];
}

const shoppingCart = [phone, tablet];
const tax = 0.15;

const [ total, taxResult ] = taxCalculation({
    products: shoppingCart,
    tax,
})

console.log('Total:', total);
console.log('Tax:', taxResult);

//! SIN DESTRUCTURAR

// function taxCalculation( options: TaxCalculationOptions ): number[] {
//     let total = 0;

//     options.products.forEach( product => {
//         total += product.price;
//     });

//     return [total, total * options.tax];
// }

// const shoppingCart = [phone, tablet];
// const tax = 0.15;

// const result = taxCalculation({
//     products: shoppingCart,
//     tax,
// })

// console.log('Total:', result[0]);
// console.log('Tax:', result[1]);
//console.log('Total + Tax', result[0] + result[1]);




export {};