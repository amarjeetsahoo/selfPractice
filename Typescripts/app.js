function add(n1, n2) {
    return n1 + n2;
}
// function printResult(num: number): void {
//     console.log('Result: ' + num);
// }
// console.log(printResult(add(5, 4)));
function printResult(num) {
    console.log('Result: ' + num);
    return;
}
printResult(add(5, 4));
var combineResult;
combineResult = add;
// combineResult = printResult;
console.log(combineResult(18, 2));
