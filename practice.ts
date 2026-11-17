// ARROW FUNCTION

// const sum = (a: number, b: number): number => {
//     return a+b;
// };

// console.log(sum(3,4));


// NORMAL FUNCTION

// function sum(a: number, b: number): number{

//     return a+b;

// }

// console.log(sum(2,4));


// Interface

// interface User {
//     id: number;
//     name: string;
// }

// interface Admin extends User {
//     permissions: string[];
// }

// const user: Admin = {

//     id: 1,
//     name: "bhuwan",
//     permissions: ["dsfds", "dfdf"]

// }

// console.log(user);


// Type

// type User = {
//     id: number;
//     name: string;
// };

// type Admin = User & {
//     permissions: string[];
// }; 


// const user: Admin = {

//     id: 1,
//     name: "bhuwan",
//     permissions: ["dsfds", "dfdf"]

// }

// console.log(user);


interface Products {

    id: number,
    name: string,
    price: number

}

type dicountedProduct = Products & {

    discount: number

}

let newProd : dicountedProduct = {

    id: 1,
    name: "bhuwan",
    price: 123,
    discount: 2

}

console.log(newProd);


type orderStatus = "completed" | "pending" | "cancelled";

let order : orderStatus = "cancelled";

console.log(order);
