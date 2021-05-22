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
function addAndHandle(a, b, cb) {
    var result = a + b;
    cb(result);
}
printResult(add(5, 4));
var combineResult;
combineResult = add;
// combineResult = printResult;
console.log(combineResult(18, 2));
addAndHandle(10, 20, function (result) {
    console.log(result);
});
