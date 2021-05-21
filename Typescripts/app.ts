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