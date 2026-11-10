// const user: {
//     name: string,
//     age: number
// } = {
//     name: "bhuwan",
//     age: 21
// }

// console.log(user.name + " is " + user.age);

// INTERFACES

interface user {
    name: string,
    age: number,
    email: string
}

const user1: user = {

    name: "bhuwan",
    age: 21,
    email: "bhuwan@gmail.com"

}

// console.log(user1);


const user2: user = {

    name: "ram",
    age: 21,
    email: "ram@gmail.com"

}

// console.log(user2);

// Optional props in interfaces

interface userSchema {
    name: string;
    age: number;
    email?: string;
}

const newUser : userSchema = {

    name: "bhuwan",
    age: 21

}

const newUser2 : userSchema = {

    name: "bhuwan",
    age: 21,
    email: "dfdsf"

}

// console.log(newUser.email);


interface User {
    readonly id: string,
    name: string
}

const u1: User = {
    id: "1",
    name: "bhuwan"
}

// u1.id = "2";
u1.name = "tushar";

console.log(u1.name);

interface Workout {
    id: string;
    userId: string;
    routineTitle: string;
    status: "active" | "completed" | "discarded";
    startedAt: Date;
    completedAt?: Date;
    duration?: number;
}


const workout: Workout = {
    id: "W101",
    userId: "U101",
    routineTitle: "Push Day",
    status: "active",
    startedAt: new Date()
};

console.log(workout);
