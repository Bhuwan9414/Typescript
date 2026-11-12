// // interface arrayType {

// //     name : string,
// //     age : number

// // }

// // const users : arrayType[] = [
// //     {
// //         name: 'bhuwan',
// //         age: 21
// //     },
// //     {
// //         name: 'gunnu',
// //         age: 16
// //     }
// // ]

// // // for(let i=0;i<users.length;i++){

// // //     console.log(users[i]);

// // // }

// // users.forEach((user) => {

// //     console.log(user);
    

// // })

// // users.push({
// //     name:"newUser",
// //     age: 22
// // })

// // users.forEach((user) => {

// //     console.log(user);
    

// // })


// // interface Profile {
// //     weight: number;
// //     height: number;
// //     age: number;
// // }

// // interface User {
// //     name: string;
// //     email: string;
// //     profile: Profile;
// // }

// // const fitUser: User = {
// //     name: "Bhuwan",
// //     email: "bhuwan@gmail.com",

// //     profile: {
// //         weight: "fdsfs",
// //         height: 175,
// //         age: 24
// //     }
// // };


// // console.log(fitUser);


// interface exercises {

//     name: string,
//     sets: number,
//     weight: number

// }

// interface routines {
//     title : string,
//     exercises : exercises[]
// }

// interface user {

//     name: string,
//     routines: routines[]

// }


// const user: user = {
//     name: "Bhuwan",

//     routines: [
//         {
//             title: "Push Day",

//             exercises: [
//                 {
//                     name: "Bench Press",
//                     sets: 3,
//                     weight: 12
//                 },
//                 {
//                     name: "Shoulder Press",
//                     sets: 3,
//                     weight: 10
//                 }
//             ]
//         },

//         {
//             title: "Pull Day",

//             exercises: [
//                 {
//                     name: "Lat Pulldown",
//                     sets: 3,
//                     weight: 12
//                 }
//             ]
//         }
//     ]
// };

// // console.log(user);

// user.routines.forEach((a) => {

//     console.log(a);
    

// })


// interface product {

//     id : number,
//     name: string,
//     price: number

// }

// const products: product[]= [

//     {
//     id : 1,
//     name: 'soap',
//     price: 50
//     },
//      {
//     id : 1,
//     name: 'soap',
//     price: 50
//     },
//      {
//     id : 1,
//     name: 'soap',
//     price: 50
//     }

// ]

// products.forEach((product) => {
//     console.log(product.name);
    
// })


// interface Address {

//     city : string,
//     state : string,
//     pincode : number

// }

// interface User {

//     name : string,
//     email : string,
//     address : Address[]

// }

// const user1 : User = {

//     name: "bhuwan",
//     email: "xads@gma",
//     address : [
//         {
//         city : "udaipur",
//         state : "raj",
//         pincode : 313001
//         }
//     ]

// }

// console.log(user1.address[0].city);

// interface Skill {



// }

interface User {

    id: number,
    name: string,
    skills: string[]

}

const users : User[] = [
    {
        id: 1,
        name: "Alex",
        skills: ["Node.js", "Express"]
    },
    {
        id: 2,
        name: "John",
        skills: ["TypeScript", "PostgreSQL"]
    }
];