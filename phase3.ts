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


// interface apiResponse<T> {

//     success: boolean,
//     data: T

// }

// const newUser : apiResponse<

// function getValue<T>(value: T): T {

//     return value

// }

// // const num = getValue<number>(100);

// const num = getValue("100")

// console.log(num);


// function identity<T>(value: T): T {

//     return value

// }

// const a = identity(100);
// const b = identity("Hello");
// const c = identity(true); 

// console.log(typeof(a));
// console.log(typeof(b));
// console.log(typeof(c));

// function apiResponse<T>(value: T): T{

//     success: boolean,
//     data: T,
//     message: String

// }


// starting Over !!!!!!!

// function getValue<T>(value : T): T {

//     return value;

// }


// const num = getValue(100);
// const str = getValue("bhuwan");

// console.log(num, str);


// interface ApiResponse<T> {
//     success: boolean;
//     data: T;
// }

// interface User {
//     id: number;
//     name: string;
// }

// interface Exercise {
//     id: number;
//     name: string;
// }

// const userResponse: ApiResponse<User> = {
//     success: true,
//     data: {
//         id: 1,
//         name: "Alex"
//     }
// };

// const exerciseResponse: ApiResponse<Exercise[]> = {
//     success: true,
//     data: [
//         { id: 1, name: "Bench Press" },
//         { id: 2, name: "Squat" }
//     ]
// };

// console.log(userResponse);

// console.log(exerciseResponse);


// interface dbResult<T> {

//     success: boolean,
//     data: T,
//     message: string

// }

// interface user {

//     name: string,
//     age: number

// }


// const userResponse: dbResult<user> = {

//     success: true,
//     data : {
//         name: 'bhuwan',
//         age: 21
//     },
//     message: "user creation success"


// }

// console.log(userResponse);

// interface exercises {

//     id: number,
//     name: string
    
// }

// const exResponse: dbResult<exercises[]> = {
    
//     success: true,
//     data : [
//         {
//             id: 1,
//             name: "squats"
//         },
//         {
//             id: 1,
//             name: "squats"
//         }
//     ],
//     message: "user creation success"

// }

// console.log(exResponse);



// GENERICS : Mutiple type parameters

// function combine<T, U>(first: T, second: U): [T,U] {

//     return [first, second]

// } 


// const result = combine(100, 'bhuwan');

// console.log(result);

// interface user {

//     id: number,
//     name: string

// }

// interface workout {

//     id: number,
//     name: string

// }

// function createWorkout<T, U>(user: T, workout: U){

//     return{
//         user,
//         workout
//     }

// }


// const response = createWorkout(
//     { id: 1, name: "Alex" },
//     { id: 101, title: "Chest Workout" }
// )

// console.log(response);

function mergeData<T, U>(first: T, second: U){

    return {first,second}

}

const response = mergeData("workout", 100);

console.log(response);
