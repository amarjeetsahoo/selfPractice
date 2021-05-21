// const person: {
//     name: string;
//     age: number;
// } = {
var person = {
    name: 'Max',
    age: 30
};
var Role;
(function (Role) {
    Role[Role["Admin"] = 0] = "Admin";
    Role[Role["Read_only"] = 1] = "Read_only";
    Role[Role["Author"] = 2] = "Author";
})(Role || (Role = {}));
;
var p = {
    role: Role.Admin
};
console.log(p.role);
