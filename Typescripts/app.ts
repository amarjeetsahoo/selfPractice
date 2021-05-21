function comb(input1: number | string, input2: number | string) {
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        result = input1 + input2;
    } else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
const combine = comb(30, 25);
console.log(combine);

const combine1 = comb('Max', 'Ama');
console.log(combine1);