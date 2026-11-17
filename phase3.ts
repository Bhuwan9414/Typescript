// function getValue<T>(value: T): T {
//     return value;
// }

// const num = getValue<number>(100)

// const string = getValue<string>("bhuwan")

// const isAdmin = getValue<boolean>(true);

// console.log(num);

// console.log(string);

// console.log(isAdmin);


// function identity<T>(value: T): T {

//     return value

// }

// const a = identity(100);
// const b = identity("Hello");
// const c = identity(true);

// console.log(a, b, c);


interface apiResponse<T> {

    success: boolean,
    data: T

}

const newUser : apiResponse<