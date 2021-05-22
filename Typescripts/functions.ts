function add(n1: number, n2: number) {
    return n1 + n2;
}
// function printResult(num: number): void {
//     console.log('Result: ' + num);
// }
// console.log(printResult(add(5, 4)));

function printResult(num: number): undefined {
    console.log('Result: ' + num);
    return;
}

function addAndHandle(a: number, b: number,
    cb: (num: number) => void) {
    const result = a + b;
    cb(result);
}

printResult(add(5, 4));

let combineResult: (a: number, b: number) => number;

combineResult = add;
// combineResult = printResult;

console.log(combineResult(18, 2));

addAndHandle(10, 20, (result) => {
    console.log(result);
});