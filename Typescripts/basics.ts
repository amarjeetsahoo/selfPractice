function add(n1: number, n2: number) {
    console.log(typeof (n1));
    return n1 + n2;
}
const num1 = 9;
const num2 = 1.10;
console.log(add(num1, num2));

let num: number;
num = 5;
console.log(typeof (num));
console.log(num);

// 2

// const person: {
//     name: string;
//     age: number;
// } = {
const person = {
    name: 'Max',
    age: 30
};

enum Role { ADMIN, Read_only, Author };

const p = {
    role: Role.ADMIN
};

console.log(person);
console.log(p);