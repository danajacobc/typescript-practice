import { Product, taxCalculation } from './06-functions-destructuring';

const shoppingCart: Product[] = [
    {
       description: 'Nokia',
       price: 150, 
    },
    {
        description: 'iPad',
        price: 200, 
    }
];

const [ total, tax ] = taxCalculation({
    products: shoppingCart,
    tax: 0.15,
});

console.log('Total', total);
console.log('Tax', tax);

