// function greet(name, callback){

//     console.log("hello " + name);

//     callback();

// }

// function greet2(){

//     console.log("u can do this!!!");

// }

// greet("bhuwan", greet2);


// const myPromise = new Promise((resolve, reject) => {

//     let success = false;

//     if (success) {
//         resolve("Data fetched successfully");
//     } else {
//         reject("Something went wrong");
//     }

// });

// myPromise
//     .then((result) => {
//         console.log(result);
//     })
//     .catch((error) => {
//         console.log(error);
//     });



//     console.log("Start");

// const promise = new Promise((resolve) => {
//     console.log("Promise created");
//     resolve();
// });

// promise.then(() => {
//     console.log("Promise resolved");
// });

// console.log("End");


async function getData() {
    return "Hello";
}

console.log(getData());

